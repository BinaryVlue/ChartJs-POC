import React from 'react'
import "./Home.css"



const Home = () => {
    return (
        <div className='Home '>
            <section className="h-screen shadow">
                <h1 className='MainText text-6xl text-gray-700'>CUTELYTIX. A NEW ERA IN WEB ANALYTICS</h1>
                <h3 className='supportLine text-xl text-gray-400'>Instantly see your current & past network activity.
                    Detect malware, & block badly behaving apps.</h3>
                <div className="space mt-4 "></div>
                <div className="graph"></div>
            </section>
            <section className="features h-screen bg-sky-300">
                <h1 className="text-6xl text-sky-900">Features</h1>
                <ul>
                    <li>Fast</li>
                    <li>Secure</li>
                    <li>Privacy Oriented</li>
                </ul>
            </section>
        </div>
    )
}

export default Home