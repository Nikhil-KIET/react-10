function Card({item,setData,data}){
    console.log(item)
   
   function incHandler(event){

    data[item.id].hour=parseInt(data[item.id].hour)+1
    setData([...data]);
   }

    
 function decHandler(event){
        data[item.id].hour=parseInt(data[item.id].hour)>0?parseInt(data[item.id].hour)-1:0
        setData([...data]);
    }
    
    

  
    return(
        
        
        <div className=" flex gap-5 items-center">


            <h1>{item.task} -</h1>
            <h1>{item.hour} Hour</h1>
            <button className="px-5 py-2 bg-blue-500
             rounded-md " onClick={incHandler} >Inc</button>
            <button className="px-5 py-2 bg-blue-500
             rounded-md " onClick={decHandler}>Dec</button>


        </div>
    )



}
export default Card;