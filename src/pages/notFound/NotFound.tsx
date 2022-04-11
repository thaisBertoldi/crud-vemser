import image from '../../images/image-notfound.gif'
import { Button, ContainerNotFound } from './NotFound.styles'

function NotFound() {
  return (
    <ContainerNotFound>
      <h3>I think you confused Simon.</h3>
      <Button as='a' href='/'>Home</Button>
      <img src={image} alt='Simon the cat' />
    </ContainerNotFound>
  )
}

export default NotFound