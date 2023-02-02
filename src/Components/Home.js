import React from 'react'
import "./Home.css"
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Website overview',
            backgroundColor: 'rgb(80,229,163,0.3)',
            borderColor: 'rgb(80,229,163)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,00,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 90, 77, 35, 96, 78]
        }
    ]
}


const Home = () => {
    return (
        <div className='Home '>
            <section className="h-screen shadow">
                <h1 className='MainText text-6xl text-gray-700'>CUTELYTIX. A NEW ERA IN WEB ANALYTICS</h1>
                <h3 className='supportLine text-xl text-gray-400 my-2'>Instantly see your current & past network activity.
                    Detect malware, & block badly behaving apps.</h3>
                <div className="space my-32 "></div>
                <div className="join-bar flex justify-evenly content-center flex-wrap">
                    <div className="reviews"><h6 className='text-lg text-gray-500'>lifeHacker</h6><p className='text-sm text-gray-400'>"Wonderful Tech"</p></div>
                    <div className="reviews"><h6 className='text-lg text-gray-500'>lifeHacker</h6><p className='text-sm text-gray-400'>"Wonderful Tech"</p></div>
                    <div className="join-button ">
                        <button className='bg-green-500 text-green-50 py-3 px-6 text-4xl rounded' onClick={e => e.preventDefault}>Join Now</button>
                    </div>
                    <div className="reviews"><h6 className='text-lg text-gray-500'>lifeHacker</h6><p className='text-sm text-gray-400'>"Wonderful Tech"</p></div>
                    <div className="reviews"><h6 className='text-lg text-gray-500'>lifeHacker</h6><p className='text-sm text-gray-400'>"Wonderful Tech"</p></div>
                </div>
                <div className="graph-container flex justify-center content-center flex-auto my-4">
                    <div className="graph w-1/2 h-96">
                        <Line
                            data={data}
                            options={options}
                        />
                    </div>

                </div>

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