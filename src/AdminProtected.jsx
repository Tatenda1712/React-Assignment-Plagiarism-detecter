import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function Protected(props){
    const history=useHistory();
    let CmpAdmin =props.CmpAdmin
    useEffect(()=>{

        if(!sessionStorage.getItem('user-info')){
          history.push("/faculty")
        }
      },[])
    return(
        <div>
           <CmpAdmin/>
      </div>
    )
}