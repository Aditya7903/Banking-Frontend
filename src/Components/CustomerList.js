import React ,{useEffect,useState}from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

function CustomerList() {
    const [data,setData]=useState([])
    useEffect(()=>{

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5000/customers", requestOptions)
            .then(response => response.json())
            .then(result => 
                {
                    console.log(result)
                    setData(result)
                }
                )
            .catch(error => console.log('error', error));
    },[])

    return (
        <>
        <Navbar/>
        
        
        <div className="container">
        
        
                   <h1 style={{color:'#000',textAlign:'center',margin:'10px',overflow:'hidden'}}>All Customers</h1>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Balance</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((items,index)=>{
                    return(
                        <tr key={index}>
                        <th scope="row" style={{display:'flex',justifyContent:'center'}}>{index+1}</th>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                        <td>Rs. {items.balance}</td>
                        <td>
                            <Link to ={`/profile/${items._id}`}>
                            <button className="btn btn-primary">Profile</button>
                            </Link>
                        </td>
                        </tr>
                    )
                })
            }    
            </tbody>
            </table>
            
        </div>
     
    </>
    )
}

export default CustomerList
