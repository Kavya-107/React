import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import {useEffect,useState,useMemo} from "react";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"



function App(){
  const [list,setList] = useState([]);
  const [b,setB] = useState("red");
  const [val,setval] = useState("");
  const addList = () =>{
    if(val!=""){
    setList([...list,val]);}
    setval("");
  }

  const dlt = (l)=>{
    console.log("deleting..");
     setList(list.filter(li=>li!==l));
  }

  function done(l){
    if(b==true){
      
      setB(false);
      return "Donnne";
    }
   return "";  
  }




  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/con" element={<Contact />} />

    </Routes>
    <h1>To do List : </h1>
   
    {
      list.map((l,index)=><><h3 style={{color:b}}> {l}  <button onClick ={()=>dlt(l)}>delete</button> <button onClick ={()=>setB("Green")}>done</button>{()=>done}</h3></>)
    }
    
    <input type="text" placeholder="Type task here"  value ={val} onChange={(e)=>setval(e.target.value)} />
    <button onClick={()=>addList()}>add</button>
    </>
  );

};

export default App;