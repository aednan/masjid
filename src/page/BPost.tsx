import { Component } from 'react'
import ContentsPage from '../component/contentsPage/ContentsPage'
import DashboardNavbar from '../component/dashboardNavbar/DashboardNavbar'
import Footer from '../component/footer/Footer'

export class BPost extends Component {
    render() {
        return (
        <div className=" grid grid-cols-1 place-content-between max-h-full min-h-screen bg-hero-pattern">
        <DashboardNavbar/>
        <ContentsPage/>
        <Footer/>
        </div> 
        )
    }
}

export default BPost
