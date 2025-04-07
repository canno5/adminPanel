import React from 'react'

const DashHeading = ({ heading }) => {
    const navVisble = ()=>{
        document.querySelector(".navbar").style.display = 'block'
    }
    return (
        <><div className="dash-head">
        <div className="burger" onClick={navVisble}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
            <h3>{heading}</h3>
        </div>
        </>
    )
}
export default DashHeading