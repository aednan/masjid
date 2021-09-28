import React, { Component } from 'react'
// import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import contents from './../../data/contents.json'

export class ContentBox extends Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);
    
        this.state = {
            time : new Date(),
        };

    }


    render() {
        return (
         //xl:pt-52
         <div className="
         grid
         lg:flex justify-center gap-5 pt-5 px-12 ">
               

                {/* left */}



                {/* center */}

                
                <Link to="/article">
                <div className="max-w-4xl lg:w-full auto-rows-max pb-5 grid gap-5">
               
                {contents.map(v => 
                <div key={v.id} className="max-w-4xl lg:w-full shadow-lg bg-white rounded-xl overflow-hidden" >
                {v.pic !== null &&  <img className="h-60 w-max object-cover" src={process.env.PUBLIC_URL + "/test.png"} alt="Logo"/> }
                <div className=" max-h-60 lg:w-max px-7 py-5 ">
                  <p className=" sm:text-xl md:text-2xl font-dosis font-black text-black">  
                  
                  {/* <FormattedMessage
                  id="app.title"
                  defaultMessage="Corona-Maßnahmen"
                  /> */}
                  
                  {v.title}
                   </p>
                  <p className=" pt-5 text-black"> 
                  { new Intl.DateTimeFormat('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                    hour: 'numeric', minute: 'numeric', second: 'numeric',  hour12: false,}).format(this.state.time)}
                   </p>
                </div>
                </div>
                )}

                </div>
                </Link>
               {/* right */}



            </div> 
        )
    }
}

export default ContentBox


interface IProps {
}

interface IState {
   time: Date;
}



