import React,{useContext, useState} from "react";
import ReactDOM from "react-dom";
import Practice from "./app"
const MyContext =React.createContext(undefined);
const Child1 =()=>{
  const {setStore}=useContext(MyContext)
  const onInputChange =(e)=>{
    setStore({value:e.target.value})
  }
  return(<>
  <h5>Hey im child 1</h5>
  <input onChange={onInputChange}/>
  </>)
}
const Child2=()=>{
  const {store}=useContext(MyContext)
  console.log(store.value,"shilpi")
  return(<>
  <h5>Hey im child 2</h5>
  <h2>{store.value}</h2>
  </>)
}
function App() {
  const [store,setStore]=useState({
    value:"default value"
  })
  return (
  <>
  <Practice/>
  <h1>Using Context API</h1>
  <MyContext.Provider value={{store,setStore}}>
  <Child1/>
  <Child2/>
  </MyContext.Provider>
  </>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

