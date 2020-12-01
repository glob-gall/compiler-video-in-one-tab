import useVideos from "../../hooks/useVideos"
import Video from "./Video"
import * as S from "./styles"

const VideoList: React.FC = () => {
  const { videos } = useVideos()

  return (
    <S.Container>
      {videos.map(({ uid, url }) => (
        <Video uid={uid} url={url} key={uid} />
      ))}
    </S.Container>
  )
}

export default VideoList
