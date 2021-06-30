import { Link } from 'react-router-dom'; 
const Menu = () => {
    return (
        <>
            <Link to ="/">Home</Link> | {" "} 
            <Link to ="/About">About</Link> | {" "}
            <Link to ="/Contact">Contact</Link> 
        </>
    )
}

export default Menu;