import '../css/Projects.css'
import PageFrame from '../components/PageFrame'
import Navigator from '../components/Navigator'
import { PROJECTS } from '../content'

function Projects() {
  return (
    <PageFrame>
      <Navigator PageNavContent = {PROJECTS} />
    </PageFrame>
  )
}

export default Projects
