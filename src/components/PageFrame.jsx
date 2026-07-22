import '../css/PageFrame.css'
import Header from "./Header";
import Background from "./Background";

function PageFrame({ children }) {
    return (
        <main className = "page">
            <Background className = "background-columns" />
            <div className = "page-frame">
                <Header />
                <div className = "page-content">
                    {children}
                </div>
            </div>
       </main>
    )
}

export default PageFrame