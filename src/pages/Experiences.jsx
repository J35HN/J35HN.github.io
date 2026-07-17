import '../css/Experiences.css'
import PageFrame from '../components/PageFrame'
import Navigator from '../components/Navigator'
import { EXPERIENCES } from '../content'

function Experiences() {
  return (
    <PageFrame>
      <Navigator PageNavContent = { EXPERIENCES } />
    </PageFrame>
  )
}

export default Experiences
