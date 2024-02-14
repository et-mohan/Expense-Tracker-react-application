export default function Balance(props){
    let income=0;
    let expense=0;
    // console.log(props);
    
    props.item.forEach((item)=>{
        // console.log(item.amount)
        if(item.amount>0){
            income+=parseInt(item.amount)
        }
        else{
            expense+=parseInt(item.amount)
        }
    })
    // console.log(income,expense)
    return (<>
            <div className="balance-box">Balance : {income-(expense*-1)}</div>    
                <div className="income-expense-container">
                    <div className="income">
                        <span>Income</span>
                        <span>{income}</span>
                    </div>
                    <div className="block"></div>
                    <div className="expense">
                        <span>Expense</span>
                        <span>{expense*-1}</span>
                    </div>
                </div>
            
    </>)
}