import Head from 'next/head'
import { useCallback, useState } from 'react'
import useVideo from '../hooks/useVideos'
import {FaPlus} from 'react-icons/fa'

import VideoList from '../components/VideoList'

import * as S from '../styles/Home'

export default function Home() {
  const {addVideo} = useVideo()
  const [newVideoUrl,setNewVideoUrl] = useState('')


  const handleAddvideo = useCallback(()=>{
    addVideo(newVideoUrl)
    setNewVideoUrl('')
  },[newVideoUrl])



  return (
      <>
        <Head>
          <title>Compiler Videos In One Tab</title>
        </Head>
        <S.Container>

        <S.Header>
          <S.InputContainer onSubmit={e=>e.preventDefault()}>
            <input value={newVideoUrl} onChange={e=>{setNewVideoUrl(e.target.value)}}/>
            <button type="submit" onClick={handleAddvideo}><FaPlus size={18} color="#f2f2f2"/></button>
          </S.InputContainer>
        </S.Header> 
          <VideoList key={1}/>
        </S.Container>
        
      </>
    )
}
