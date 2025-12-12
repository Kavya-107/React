import { Link,useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  return (
   
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link style={{ marginRight: "15px" }} to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick = {() => navigate("/about")}>About btn</button>
    </nav>
  );
}

export default Header;