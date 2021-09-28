import { Component } from 'react'
import ContentBox from '../component/contentBox/ContentBox'
import DashboardNavbar from '../component/dashboardNavbar/DashboardNavbar'
import Sbox from '../component/sbox/Sbox'

let sTimes = [ 
    {id:1,
    name: "Fajr",
    time: "06:00",
    icon: "Sunrise.svg",}, 
    {id:2,
    name: "Sunrise",
    time: "06:00",
    icon: "Sunny.svg",}, 
    {id:3,
    name: "Dhuhr",
    time: "06:00",
    icon: "Sunny.svg",}, 
    {id:4,
    name: "Asr",
    time: "06:00",
    icon: "SunnyHigh.svg",}, 
    {id:5,
    name: "Maghrib",
    time: "06:00",
    icon: "Sunset.svg",}, 
    {id:6,
    name: "Isha",
    time: "06:00",
    icon: "Night.svg",} 
 ];


export class Dashboard extends Component {
    render() {
        return (
            <div className="max-h-full min-h-screen bg-hero-pattern bg-no-repeat bg-cover">
            <Sbox sTimes={sTimes} />
            <DashboardNavbar/>
            <ContentBox/>
            </div>
        )
    }
}

export default Dashboard
