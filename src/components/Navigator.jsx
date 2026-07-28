import { useState } from "react";
import { TONES } from "../content";
import '../css/Navigator.css';

function Navigator( {PageNavContent} ) {
    // Computed once on mount so it doesn't shuffle on re-render.
    const [tones] = useState(() =>
        PageNavContent.map(() => TONES[ Math.floor( Math.random() * (TONES.length - 1) ) ])
    );

    return (
        <>
        {
            PageNavContent.map( (item, i) => {
                return (
                    <a key = {i} href = {`${item.url}`} className = {`page-frame-navigator ${tones[i]}`}>
                        {item.title}
                    </a>
                )
            })
        }
        </>
    )
}

export default Navigator