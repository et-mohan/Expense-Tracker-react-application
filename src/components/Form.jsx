
import { useState } from 'react';

export default function Form(props){
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [errors,setErrors]=useState({});
    // console.log(props.setItems)
   
    const handleSubmit=(e)=>{

        let err={};
        e.preventDefault()
        if(title==false && amount==false){
            err.title='Title and amount is empty'
            
        }
        if(title==false){
            err.title='Title is empty'
        }
        if(amount==false){
            err.amount='amount is empty'
        }
        if(Object.keys(err).length>0){
            setErrors({...err})
            return 
        }
        else{
            props.addItems(title,amount)  
        }
        setTitle('')
        setAmount('')
        
        // console.log(title, amount)
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value)
        setErrors({...errors,title:''})
    }
    const handleAmountChange=(e)=>{
        setAmount(e.target.value)
        setErrors({...errors,amount:''})
    }
    return (<>
         <div className='form-container'>
        <form onSubmit={handleSubmit}>
           
            <div className='input-container'>
                <label htmlFor="title">Title </label><br></br>
                <input type='text' id='title' value={title} onChange={handleTitleChange}/><br/>
               
            </div>
            <div className='input-container'>{errors.title && <div className='error'>{errors.title}</div>} </div>
            <br></br>
            <div className='input-container'>
                <label htmlFor="amount">Amount </label><br/>
                <input type='Number' id='amount' value={amount} onChange={handleAmountChange} />
             
            <br/>   
            </div >
            <div className='input-container'>{errors.amount && <div className='error'>{errors.amount}</div>} </div>
            <br></br>
            <div className='input-container'>
                <button type='submit' className='button'>Add Transaction</button>
            </div>
            
        </form>
        </div>
    
    </>  
    )
}






