import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error404 from './404';

import Contact from './Contact';

import News from './News';
import About from './About';
import Home from './Home';

import login from './Login';
import Asesorias from './Asesorias';
import Propiedades from './Propiedades';
import Administrador from "./Adminitrador";



const App = ()=> {
    return (
        <BrowserRouter>
                  
            {/* <Menu />  */}

            <Switch> 
                <Route exact path="/LogIn" component ={login} />
                <Route exact path="/News" component ={News} />
                <Route exact path="/Contact" component ={Contact} />
                <Route exact path="/About" component ={About} />
                <Route exact path="/Asesorias" component ={Asesorias} />
                <Route exact path="/Propiedades" component ={Propiedades} />
                <Route exact path="/Administrador" component ={Administrador} /> 
                
                
                <Route exact path="/">
                    




                    <Home />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            
            </Switch>
           
            {/* <Footer/> */}
            
            
            
            
        
        
        </BrowserRouter>
        
        
    )
}

export default App;