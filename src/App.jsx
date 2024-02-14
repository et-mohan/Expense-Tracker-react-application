import axios  from "axios";
import Balance from "./components/Balance";
import Expenseitem from "./components/Expenseitem";
import Form from "./components/Form"
import {useEffect, useState} from "react";
// const axios = require('axios');

export default function App(){
  
  useEffect(()=>{
    axios.get("https://expense-tracker-api-cn73.onrender.com/display-entry")
    .then((res)=>{
      console.log(res.data);
      setItems(res.data)
    })
    .catch(
      (err)=>{
        console.log("err",err)
      }
    )
  })
  const [items,setItems]=useState([
    {
      id:1,
      title:"car",
      amount:"-2000"
    },
    { 
      id:2,
      title:"diseal",
      amount:"-1000"
    },
    { 
      id:3,
      title:"vegetable",
      amount:"-1000"
    },
    { 
      id:4,
      title:"salary",
      amount:"5000"
    }
  ]);
  const deleteItem=(id)=>{
    setItems(items.filter((item)=>item.id!==id))
  }
  const addItems=(title,amount)=>{
    const nextId=items[items.length-1].id+1;
    setItems([...items,{id:nextId, title:title,amount:amount}])
  }
  return (<>      
      <Balance item={items}/>  
      <Form addItems={addItems}/>
      {items.map(item=><Expenseitem  key={item.id} id={item.id} deleteItem={deleteItem}  item={item}/>)}
     
  </>)
}