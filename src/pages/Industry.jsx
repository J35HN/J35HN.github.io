import '../css/Industry.css'
import PageFrame from '../components/PageFrame'
import Navigator from '../components/Navigator'
import { INDUSTRY } from '../content'

function Industry() {
  return (
    <PageFrame>
      <Navigator PageNavContent={INDUSTRY} />
    </PageFrame>
  )
}

export default Industry