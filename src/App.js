import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './Components/Menu';
import Error404 from './404';

import Contact from './Contact';
import Noticias from './Noticias';
import About from './About';
import Home from './Home';
import Footer from "./Components/Footer";


const App = ()=> {
    return (
        <BrowserRouter>
                  
            <Menu />

            <Switch> 
                <Route exact path="/Noticias" component ={Noticias} />
                <Route exact path="/Contact" component ={Contact} />
                <Route exact path="/About" component ={About} />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            
            </Switch>
            
            <Footer />
        
        
        </BrowserRouter>
        
        
    )
}

export default App;