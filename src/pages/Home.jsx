import React, {useEffect} from 'react'
import axios from 'axios';

function Home() {
    const getdata = async () => {
        try {
            const response = await axios.post("/api/user/get-user-info-by-id", {}, {
                headers: {
                    Authorization: "Brearer " + localStorage.getItem('token')
                }           
            });
            console.log(response.data);
        } catch (error) {
            console.log(error)
            
        }
    };

    useEffect(()=>{
     
      getdata()

    }, );
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
