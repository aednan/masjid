import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (

             <div> 

               <div className=" sm:px-10  bg-footer-pattern bg-no-repeat  bg-cover
               border-solid border-t-4 border-gray-200 py-20
               grid grid-cols-1 sm:flex items-baseline justify-around
                ">


              <div className="justify-items-center max-w-6xl w-full grid grid-cols-1 sm:flex justify-center items-baseline sm:justify-start gap-3 gap-x-10 lg:gap-x-56">
              
              <span className=" py-5 text-center sm:text-left grid grid-cols-1 
      sm:text-lg font-sans font-bold">© 2021 Masjid Al Mohajirin 
      <span className="text-sm pt-3"> Interkulturelle Integration Bildung </span>
      <span className="text-sm"> S, 1 </span>
      <span className="text-sm"> 00000 Kempten </span>
      </span>
              
              <div className=" justify-items-center grid-cols-2 text-center sm:text-left grid gap-16 sm:px-0 sm:gap-x-16 gap-y-2 font-bold ">
              <span className="cursor-pointer ">Terms</span>
              <span className="cursor-pointer" >Privacy</span>
              <span className="cursor-pointer">Contact us</span>
              <span className="cursor-pointer">About</span>
            
              </div>


              </div>



               <div className=" mt-10 sm:mt-0 flex gap-7 items-baseline  justify-center" > 
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="black" viewBox="0 0 512 512" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="black" viewBox="0 0 576 512" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" />
        </svg>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="black" viewBox="0 0 448 512" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
        </div>


               </div>

               </div>
        )
    }
}

export default Footer
