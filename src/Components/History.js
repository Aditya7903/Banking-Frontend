import React ,{useState,useEffect}from 'react'
import Navbar from './Navbar';
const Backend_URL='http://localhost:5000'
function History() {
    const [Data,setData]=useState(undefined)
    useEffect(()=>{

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(Backend_URL+"/history", requestOptions)
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
           <br/>
           <h1 style={{color:'#fff',textAlign:'center',overflow:'hidden'}}>Transaction History</h1>
           <table class="table">
            <thead>
                <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Sender Name</th>
                <th scope="col">Sender Email</th>
                <th scope="col">Receiver Name</th>
                <th scope="col">Receiver Email</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    Data?
                    <>
                    {
                       Data.length>0
                       ?
                        <>
                        {
                               Data.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.sendername}</td>
                                        <td>{item.senderemail}</td>
                                        <td>{item.receivername}</td>
                                        <td>{item.receiveremail}</td>
                                        <td>{item.amount}</td>
                                        <td>{new Date(item.date).getDate()+'-'+new Date(item.date).getMonth()+'-'+new Date(item.date).getFullYear()}</td>
                                    </tr>
                                )

                            })
                        }
                        </>
                        :
                        <div className="card" style={{textAlign:'center'}}>No Result Found</div>
                    }
                    </>
                    :
                    <div>Loading....</div>
                }
            </tbody>
            </table>
        </>
    )
}

export default History
