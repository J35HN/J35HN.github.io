import { useEffect, useState, useRef } from "react";
import '../css/PageFrame.css'
import { NAVIGATION } from "../content";

function PageFrame({ children }) {
    return (
        <main className = "page">
            <div className = "background-columns" />
            <div className = "page-frame">
                <header className = "page-header">
                    {NAVIGATION.map((item, i) => {
                        return (
                            <div key = {i}>
                                <a key = {i} href = {item.source}>{item.name}</a>
                            </div>
                        )
                    })}
                </header>
                <div className = "page-content">
                    {children}
                </div>
            </div>
       </main>
    )
}

export default PageFrame