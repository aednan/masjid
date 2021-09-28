import './App.css';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Dashboard from './page/Dashboard';
import BPost from './page/BPost';


function App() {
  
  return (
<>

<BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
<Switch>
<Route path='/' exact component={Dashboard} />  
<Route path='/article' exact component={BPost} />
 {/* 404: to be edited later */}
<Route path='/:other' component={Dashboard}></Route>
</Switch>
</BrowserRouter>

</>

  );
}

export default App;
