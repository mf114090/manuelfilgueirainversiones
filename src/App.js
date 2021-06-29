import { BrowserRouter, Route } from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Home from './Home';

const App = ()=> {
    return (
        <BrowserRouter>
            <Route exact path="/Contact" component ={Contact} />
            <Route exact path="/About" component ={About} />
            <Route exact path="/">
                <Home />
            </Route>
        
        
        
        </BrowserRouter>
    )
}

export default App;