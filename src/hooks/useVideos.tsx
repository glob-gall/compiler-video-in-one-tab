/* eslint-disable prettier/prettier */
import {createContext,useCallback,useContext, useEffect, useState} from 'react'
import {VideoProps} from '../components/VideoList/Video'
import {v4} from 'uuid'

interface IVideoProvider{
  videos:VideoProps[]
  addVideo(video_url:string):void
  removeVideo(key:string):void
}

const VideoContext = createContext({} as IVideoProvider)

const useVideos = ():IVideoProvider => {
  const context = useContext(VideoContext)
  return context
}

export const VideoProvider: React.FC = ({children})=>{
  const [videos,setVideos] = useState<VideoProps[]>([])

  useEffect(()=>{
      const storageVideos = localStorage.getItem('@CompilerVideos:videos')

      if(!storageVideos){
        setVideos([{
          uid:v4(),
          url:'https://www.youtube.com/embed/5qap5aO4i9A'
        }])
        return
      }

      setVideos(JSON.parse(storageVideos))

  },[])

const addVideo = useCallback((video_url:string)=>{
  if(video_url===''||video_url==='lofi'){
    video_url = 'https://www.youtube.com/watch?v=5qap5aO4i9A'
  }

  const valid = /www\.youtube\.com|youtu.be/g.test(video_url)
  if(!valid)return
  const embedVideo = video_url.replace(/watch\?v=/,'embed/')
  const resetTimeVideo = embedVideo.replace(/&t=[0-9]{0,}s/,'')
  const removeYoutubeFeature = resetTimeVideo.replace(/&feature=youtu\.be/g,'')
  const mobileToWeb = removeYoutubeFeature.replace(/youtu\.be/,'www.youtube.com/embed/')
  const removeChannelUrl = mobileToWeb.replace(/&ab_channel=[a-z,0-9]+/i,'')

  const newVideo = {uid:v4(),url:removeChannelUrl}
  setVideos(state=> {
    const newVideosArray = [...state,newVideo]
    localStorage.setItem('@CompilerVideos:videos',JSON.stringify(newVideosArray))
    return newVideosArray
  })
},[])

const removeVideo = useCallback((uid:string)=>{
  const oldVideos = videos;
  const newVideos = oldVideos.filter(video=> video.uid !== uid)

  localStorage.setItem('@CompilerVideos:videos',JSON.stringify(newVideos))
  setVideos(newVideos)
},[videos])

  return(
    <VideoContext.Provider value={{
      videos,
      addVideo,
      removeVideo
    }}>
      {children}
    </VideoContext.Provider>
  )
}

export default useVideos
