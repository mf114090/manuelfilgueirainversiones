import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './Components/Menu';
import Error404 from './404';

import Contact from './Contact';

import News from './News';
import About from './About';
import Home from './Home';
import Footer from "./Components/Footer";
import login from './Components/Login';
import Asesorias from './Asesorias';
import Propiedades from './Propiedades';


const App = ()=> {
    return (
        <BrowserRouter>
                  
            <Menu /> 

            <Switch> 
                <Route exact path="/LogIn" component ={login} />
                <Route exact path="/News" component ={News} />
                <Route exact path="/Contact" component ={Contact} />
                <Route exact path="/About" component ={About} />
                <Route exact path="/Asesorias" component ={Asesorias} />
                <Route exact path="/Propiedades" component ={Propiedades} />
                <Route exact path="/">
                    




                    <Home />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            
            </Switch>
           
            <Footer/>
            
            
            
            
        
        
        </BrowserRouter>
        
        
    )
}

export default App;