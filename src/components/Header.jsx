import { NAVIGATION } from "../content";
import '../css/Header.css'

function Header() {
    return (
        <header className = "header">
            <a href = "/" className = "block-bth"></a>
            {NAVIGATION.map((item, i) => {
                return (
                    <div key = {i}>
                        <a key = {i} href = {item.source}>{item.name}</a>
                    </div>
                )
            })}
        </header>
    )
}

export default Header