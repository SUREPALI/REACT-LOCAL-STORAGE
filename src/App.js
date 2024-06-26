import React,{useState} from 'react';
import './App.css';

const App =()=> {
  let [username,setusername] = useState("");
  let [userno,setuserno] = useState ("")
  function submit (){
    var usersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    var userdata = {
      username : username,
      userno :userno
    };
    usersdata.push(userdata);
    localStorage.setItem ("usersdata",JSON.stringify(usersdata))
  }
  return (
    <div className="App">
      <div className='body' >
      <h1>username : {username}</h1>
      <input type="text"  onChange={(e)=>{setusername(e.target.value)}}></input>
      <h1> userno : {userno}</h1>
      <input type="number" onChange={(e)=>{setuserno(e.target.value)}}></input>
      <button onClick={submit}>submit</button>
      </div>
    </div>
  );
}

export default App;
