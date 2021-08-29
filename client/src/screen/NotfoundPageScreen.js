import React from 'react'
import "../style/notFoundPageStyle.css"
import notFound from "../assets/notFound.svg"

export default function NotfoundPageScreen() {
    return (
        <>
            <div className="notFound">
                <div className="mainBody">
                    <img src={notFound} alt="notFound" />
                    <h2>OPPS !</h2>
                    <p>The page you are requested could not be found!</p>
                </div>
            </div>
        </>
    )
}
