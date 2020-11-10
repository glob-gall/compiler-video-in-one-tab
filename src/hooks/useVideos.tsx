import {createContext,useCallback,useContext, useEffect, useState} from 'react'
import {VideoLink} from '../components/VideoList'
import {v4} from 'uuid'

interface IVideoProvider{
  videos:VideoLink[]
  addVideo(video_url:string):void
  removeVideo(key:string):void
}

const VideoContext = createContext({} as IVideoProvider)

const useVideos = () => {
  const context = useContext(VideoContext)
  return context
}

export const VideoProvider: React.FC = ({children})=>{
  const [videos,setVideos] = useState<VideoLink[]>([])

  useEffect(()=>{
      const storageVideos = localStorage.getItem('@CompilerVideos:videos')
      console.log(!!storageVideos)
      
      if(!storageVideos){
        setVideos([{
          key:v4(),
          text:'https://www.youtube.com/embed/5qap5aO4i9A'
        }])
        return
      }
      
      setVideos(JSON.parse(storageVideos))

  },[])

const addVideo = useCallback((video_url:string)=>{
  const valid = /www\.youtube\.com|youtu.be/g.test(video_url)
  if(!valid)return

  const embedVideo = video_url.replace(/watch\?v=/,'embed/')
  const resetTimeVideo = embedVideo.replace(/&t=[0-9]{0,}s/,'')
  const mobileToWeb = resetTimeVideo.replace(/youtu\.be/,'www.youtube.com/embed/')
  
  console.log(mobileToWeb)
  const newVideo = {key:v4(),text:mobileToWeb}

  setVideos(state=> {
    const newVideosArray = [...state,newVideo]
    localStorage.setItem('@CompilerVideos:videos',JSON.stringify(newVideosArray))
    return newVideosArray
  })
},[])

const removeVideo = useCallback((key:string)=>{
  const oldVideos = videos;
  const newVideos = oldVideos.filter(video=> video.key !== key)
  
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