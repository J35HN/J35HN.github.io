import '../css/Volunteering.css'
import PageFrame from '../components/PageFrame'
import Navigator from '../components/Navigator'
import { VOLUNTEERING } from '../content'

function Volunteering() {
  return (
    <PageFrame>
      <Navigator PageNavContent = { VOLUNTEERING } />
    </PageFrame>
  )
}

export default Volunteering
