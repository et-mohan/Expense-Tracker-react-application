export default function (props){
    // console.log(props.deleteItem(1))
   
    const {id}=props
    const deleteItems=()=>{
        props.deleteItem(id)
    }
    return(<>
        <div className="expense-container">
        <div className={`expense-item ${props.item.amount>0? 'positive':'negative'}`}>
            <div className="expense-title">{props.item.title}</div>
            <div className="expense-amount">Rs {props.item.amount}</div>
        </div>
        <button onClick={deleteItems}>delete</button>
        </div>
        
    </>)
}