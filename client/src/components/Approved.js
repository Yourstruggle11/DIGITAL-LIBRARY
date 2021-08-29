import React from 'react'
import "../style/adminDashboardPageStyle.css"


export default function Approved({name}) {
    return (
        <>
            <div className="approvedCard" id="listApprovedCard">
                <h2 style={{wordBreak:"break-word",padding:"0.5rem"}}>{name}</h2>
            </div>
        </>
    )
}
