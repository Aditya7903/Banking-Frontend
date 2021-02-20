import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import TransferMoneyForm from './TransferMoneyForm'
const Backen_URL='http://localhost:5000'
function Profile() {
    const {id}=useParams()
    const [Data,setData]=useState({})
    console.log(id)
    useEffect(()=>{

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
       fetch(`${Backen_URL}/customer/${id}`,requestOptions)
       .then(response => response.json())
       .then(result => 
           {
               console.log(result)
               setData(result)
           }
           )
       .catch(error => console.log('error', error));
    },[id])
    return (
        <>
          <Navbar/>
          <br/>  
          <div className="container" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
              <h1 style={{color:'#000',textAlign:'center',overflow:'hidden'}}>Customer's Profile</h1>
              <div className="card" style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'500px'}}>
                    <div className="cust_wrapper">
                        <div>Name</div>
                        <div>{Data.name}</div>
                    </div>
                    <div className="cust_wrapper">
                        <div>Email</div>
                        <div>{Data.email}</div>
                    </div>
                    <div className="cust_wrapper">
                        <div>Balance</div>
                        <div>Rs. {Data.balance}</div>
                    </div>
              </div>
              <div style={{display:'flex',justifyContent:'center',margin:'10px'}}>
              <h3>
                  Transfer Money
              </h3>
              </div>
              <div className="">
                  <TransferMoneyForm
                    senderName={Data.name}
                    senderEmail={Data.email}
                  />
              </div>
          </div>
        </>
    )
}

export default Profile
