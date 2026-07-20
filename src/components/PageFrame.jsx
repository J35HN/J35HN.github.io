import { useEffect, useState, useRef } from "react";
import '../css/PageFrame.css'
import Header from "./Header";

function PageFrame({ children }) {
    return (
        <main className = "page">
            <div className = "background-columns" />
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