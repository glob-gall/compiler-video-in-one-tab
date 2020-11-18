import { useTransition } from "react-spring"
import { FaTimes } from "react-icons/fa"

import useVideos from "../../hooks/useVideos"
import * as S from "./styles"

export interface VideoLink {
  key: string;
  text: string;
}

const VideoList: React.FC = () => {
  const { removeVideo, videos } = useVideos()

  const videoTransition = useTransition(videos, (video) => video.key, {
    from: {
      height: "0px",
    },
    enter: {
      height: "140px",
    },
    leave: {
      height: "0px",
    },
  })

  return (
    <S.Container>
      {videoTransition.map(({ item, props, key }) => (
        <S.ContainerVideo key={key} style={props} height={140} width="100%">
          <>
            <S.HeaderVideo>
              <S.XButton
                type="button"
                onClick={() => {
                  removeVideo(item.key)
                }}
              >
                <FaTimes size={18} color="#f2f2f2" />
              </S.XButton>
            </S.HeaderVideo>
            <iframe
              src={item.text}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </>
        </S.ContainerVideo>
      ))}
    </S.Container>
  )
}

export default VideoList
