import { Link,Routes,Route} from "react-router-dom";

function Header() {
  
  return (   
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to = "/con">Contact</Link>
    </nav>
    
  );
};

export default Header;