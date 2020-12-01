/* eslint-disable prettier/prettier */
import * as S from "./styles"
import { FaTimes } from "react-icons/fa"
import useVideos from "../../../hooks/useVideos"

export interface VideoProps{
  uid:string
  url:string
}

const Video: React.FC<VideoProps> = ({uid,url}) => {
  const {removeVideo} = useVideos()
  return (
    <S.Container height={140}>
      <>
        <S.HeaderVideo>
          <S.XButton
            type="button"
            onClick={() => {
              removeVideo(uid)
            }}
          >
            <FaTimes size={18} color="#f2f2f2" />
          </S.XButton>
        </S.HeaderVideo>
        <S.AnimatedVideo
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </>
    </S.Container>
  )
}

export default Video
