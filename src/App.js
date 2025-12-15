import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import {useEffect,useState,useMemo} from "react";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"



function App(){
  const [val,setval] = useState(0);
  
  return (
    <>
    <h1>Value  : {val}</h1>
    <button onClick={()=>setval(val+1)}>increase</button>
    {console.log("App")}
    <Home val={val} setval={setval}/>
    <About val={val} setval={setval}/>


    </>
  );

};

export default App;