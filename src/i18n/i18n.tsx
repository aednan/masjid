import React, {useState} from "react";
import {IntlProvider} from "react-intl";
import Arabic from "./language/ar-AR.json";
import English from "./language/en-EN.json";
import Deutsch from "./language/de-DE.json";

interface contextType {

    locale:any;
    selectLang: (e:any) => void;
}

export const mainContext = React.createContext<Partial<contextType>>({});
const local = navigator.language;

let lang:any;
if (local === "en-US"){
    lang = English;
}
if (local === "de-DE"){
    lang = Deutsch;
}
if (local === "ar-AR"){
    lang = Arabic;
}

const Wrapper = (props:any) => {

    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);
    
   function selectLang(e:any) {
       
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "en-EN"){
            setMessages(English);
        }
        if (newLocale === "de-DE"){
            setMessages(Deutsch);
        }
        if (newLocale === "ar-AR"){
            setMessages(Arabic);
        }
        
   }

    return (
        <mainContext.Provider value={{locale, selectLang}}>
        <IntlProvider messages={messages} locale={locale}>
         {props.children}
        </IntlProvider>
        </mainContext.Provider>
    );
}

export default Wrapper;





