import React ,{useEffect,useState}from 'react'

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
        <div>
            {
                data.map(items=>{
                    return(
                        <div>
                            {items.name}
                            </div>
                    )
                })
            }    
            
        </div>
    )
}

export default CustomerList
