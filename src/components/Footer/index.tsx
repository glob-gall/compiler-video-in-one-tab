import { Container } from "./styles"
import { VscGithubInverted } from "react-icons/vsc"

const Footer: React.FC = () => {
  return (
    <Container>
      <a
        href="https://github.com/glob-gall/compiler-video-in-one-tab"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubInverted size={24} />
        Contribute
      </a>
    </Container>
  )
}

export default Footer
