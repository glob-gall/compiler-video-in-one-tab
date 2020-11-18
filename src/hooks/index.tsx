import { VideoProvider } from "./useVideos"

const hooks: React.FC = ({ children }) => {
  return <VideoProvider>{children}</VideoProvider>
}

export default hooks
