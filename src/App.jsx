import "./App.css";
import React, { useState } from "react";
import Tasks from "./Tasks";


function App() {
  const [tasks,setTasks]=useState("");
  const [hour,setHour]=useState(0);
  const [count,setCount]=useState(0);


  function taskHandler(event){
    setTasks(event.target.value);
  }

  function hourHandler(event){

    setHour(event.target.value);
  }
  const[data,setData]=useState([]);

  
  
  
  function addHandler(){
    const newData={
      task:tasks,
      hour:hour,
      id:count
    }
    setCount(count+1)
    setData([...data,newData]);
    


  }



  return (
    <div className=" flex flex-col h-screen items-center justify-center">
      <h1 className=" text-xl font-bold text-blue-600 ">Geekster Education Platform</h1>
      <div className="flex gap-5 items-center py-8 ">
      <input className=" border-2" type="text"  placeholder="Subject" name="" id="" onChange={taskHandler} />
      <input className=" border-2"  type="text" placeholder="hour" name="" id="" onChange={hourHandler}  />
      <button className="px-5 py-2 bg-blue-500
             rounded-md " onClick={addHandler}>ADD</button>
      </div>

      <Tasks  data={data}  setData={setData}></Tasks>
    </div>
  );
}

export default App;
