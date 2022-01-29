import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error404 from './404';

import Contact from './Contact';

import News from './News';
import About from './About';
import Home from './Home';

import login from './Login';
import Asesorias from './Asesorias';
import Propiedades from './Propiedades';
import DashBoard from "./DashBoard";
import Listadodecontactos from "./Listadodecontactos";
import Crearcontacto from "./Crearcontacto";
import Listadodepropiedades from "./Listadodepropiedades";
import Crearpropiedad from "./Crearpropiedad";


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
                <Route exact path="/DashBoard" component ={DashBoard} /> 
                <Route exact path="/Listadodecontactos" component ={Listadodecontactos} /> 
                <Route exact path="/Crearcontacto" component ={Crearcontacto} /> 
                <Route exact path="/Listadodepropiedades" component ={Listadodepropiedades} /> 
                <Route exact path="/Crearpropiedad" component ={Crearpropiedad} /> 
                
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