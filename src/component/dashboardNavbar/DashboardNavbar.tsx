import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomizedDialogs from '../dialog/CustomizedDialogs'
import ADropdown from '../dropdown/ADropdown'

export default class DashboardNavbar extends Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        return (
                <div className=" 
                 bg-gray-50 h-16 shadow-md flex items-center justify-around 
                fixed inset-0">

                {/* <div className="flex-shrink-0"> */}
                <Link to="/Dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 cursor-pointer" fill="black" viewBox="0 0 640 512" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160H0v320zm579.16-192c17.86-17.39 28.84-37.34 28.84-58.91c0-52.86-41.79-93.79-87.92-122.9c-41.94-26.47-80.63-57.77-111.96-96.22L400 0l-8.12 9.97c-31.33 38.45-70.01 69.76-111.96 96.22C233.79 135.3 192 176.23 192 229.09c0 21.57 10.98 41.52 28.84 58.91h358.32zM608 320H192c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h32v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h32c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM64 0S0 32 0 96v32h128V96c0-64-64-96-64-96z" />
                </svg>
                </Link>

                {/* </div> */}

                <div className="h-8 justify-center flex-shrink-0 flex gap-2 ">
                <ADropdown/>
                <CustomizedDialogs/>
                </div>

            </div>
        )
    }
}
interface IProps {
}

interface IState {
}
