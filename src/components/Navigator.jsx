import { TONES } from "../content";
import '../css/Navigator.css';

function Navigator( {PageNavContent} ) {
    return (
        <>
        {
            PageNavContent.map( (item, i) => {
                return (
                    <a key = {i} href = "/" className = {`page-frame-navigator ${TONES[ Math.floor( Math.random() * (TONES.length - 1) ) ]}`}>
                        {item.title}
                    </a>
                )
            })
        }
        </>
    )
}

export default Navigator