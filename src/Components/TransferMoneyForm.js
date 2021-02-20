import React ,{useEffect,useState}from 'react'
import {useHistory} from 'react-router-dom'
const Backend_URl='https://basicbankingapi.herokuapp.com'
function TransferMoneyForm({senderName,senderEmail}) {
    const [Data,setData]=useState(undefined)
    const [Email,setEmail]=useState('')
    const [Name,setName]=useState('')
    const [Amount,setAmount]=useState('')
    const [Message,setMessage]=useState('')
    const [Success,setSuccess]=useState(false)
    const history=useHistory()
    useEffect(()=>{

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
        fetch(`${Backend_URl}/customers`,requestOptions)
        .then(response => response.json())
       .then(result => 
           {
               console.log(result)
               setData(result)
           }
           )
       .catch(error => console.log('error', error));
        
    },[Success])

    const FindName=(email)=>{

        setEmail(email)
        console.log('Email',email)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = JSON.stringify({"email":email});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow',
          };
        fetch(`${Backend_URl}/getname`,requestOptions)
        .then(response=>response.json())
        .then(result=>{
            console.log('Name',result)
            setName(result.name)
        })
        .catch(err=>console.log(err))

    }

    const SubmitHandlers=(e)=>{
        e.preventDefault()
        setSuccess(false)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = JSON.stringify({"sendername":senderName,"senderemail":senderEmail,"receivername":Name,"receiveremail":Email,"amount":Amount});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow',
          };
        fetch(`${Backend_URl}/transaction`,requestOptions)
        .then(response=>response.json())
        .then(result=>{
            console.log(result)
            if(result.status===1)
            {
                setSuccess(true)
                setMessage(result.message)
                history.push('/history')
            }
            else if(result.status===0)
            {
                setSuccess(false)
                setMessage(result.message)
            }
        })
        .catch(err=>console.log(err))

    }
    return (
        <>
        <h4 style={{color:'#fff',overflow:'hidden'}}>{Message}</h4>
        <form onSubmit={SubmitHandlers}>
        <div class="form-group">
            <label htmlFfor="email"><b style ={{color:'#000'}}>Receiver's Email</b></label>
            <select class="form-control" id="email" value={Email} onChange={(e)=>FindName(e.target.value)}>
                <option>Select an email</option>
            {
                Data?
                <>
                {
                    Data.map(items=>{
                        return(
                            <option value={items.email}>{items.email}</option>
                        )
                    })
                }
                </>
                :
                <option>Loading...</option>
            }
            </select>
        </div>
        <div class="form-group">
            <label htmlFor="name"><b style ={{color:'#000'}}>Receiver's Name</b></label>
            <input type="text" class="form-control" id="name" placeholder="Reciever's Name" value={Name} disabled/>
        </div>
        <div class="form-group">
            <label htmlFor="amount"><b style ={{color:'#000'}}>Amount</b></label>
            <input type="number" class="form-control" id="amount" placeholder="Amount to be tansferred" value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </>
    )
}

export default TransferMoneyForm
