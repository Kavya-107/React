

function Home(props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Value in home : {props.val}</h1>
      {console.log("Home")}
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React component.</p>
      <button onClick={()=>props.setval(props.val+1)}>increase</button>
    </div>
  );
}

export default Home;
