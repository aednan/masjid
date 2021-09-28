import React, { Component } from 'react'

export class Sbox extends Component<IProps, IState> {

    
    constructor(props: IProps) {
        super(props);
    
        this.state = {
            //  name: '',
        };

    }
    

    render() {
        return (
            // xl:fixed
        <div className='
        border-solid border-b-4 border-gray-200 
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-6  xl:left-0 xl:right-0
        mt-16
        grid px-10 py-4 gap-6 max-w-full   '> 
         
          {this.props.sTimes?.map(s => 

            <div key={s.id} className=
            
            {s.name==='Asr'?
            "p-6 h-24 bg-white rounded-xl border-green-400 border-2 shadow-xl flex items-center justify-between space-x-7"
            :
            "p-6 h-24 bg-white rounded-xl shadow-lg flex items-center justify-between space-x-7"
            }>
            <div>
                <div className="xl:text-3xl 
                text-2xl
                font-dosis font-black tracking-tight text-black"> {s.name} </div>
                <p className="pt-2 text-gray-500">{s.time}</p>
            </div>
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src={process.env.PUBLIC_URL + "/" +s.icon} alt="Logo"/>
            </div>
            </div>
           )}

            </div>
        )
    }
}

export default Sbox

interface IProps {
    sTimes: {
        id: number;
        name: string;
        time: string;
        icon: string;
    } [];
}

interface IState {
// name: string;
}
