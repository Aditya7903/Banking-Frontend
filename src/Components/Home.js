import React from 'react'
import Navbar from './Navbar'

function Home() {
    return (
        <div>
            <Navbar/>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',color:'#fff'}}>
                <h1 style={{overflow:'hidden'}}>
                   Lakshmi Chit Fund
                </h1>
                <p>Address: Saitan Gully, Khatri Mohalla, Royal Circus ke Picche</p>
                <p>Contact: 8881212</p>
            </div>
        </div>
    )
}

export default Home
