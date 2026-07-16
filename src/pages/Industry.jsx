import '../css/Industry.css'
import PageFrame from '../components/PageFrame'
import { INDUSTRY } from '../content'
import { TONES } from '../content'

function Industry() {
  return (
    <PageFrame>
      {
        INDUSTRY.map( (item, i) => {
          return (
            <div key = {i} className = {`page-frame-navigator ${TONES[ Math.floor( Math.random() * (TONES.length - 1)) ]}`}>
              {item.title}
            </div>
          )
        })
      }
    </PageFrame>
  )
}

export default Industry