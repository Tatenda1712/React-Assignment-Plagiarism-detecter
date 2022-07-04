import { useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'

export default function Protected(props){
    const history=useHistory();
    let Cmp =props.Cmp
    useEffect(()=>{

        if (!sessionStorage.getItem('user-info')){
          history.push("/studentregister")
        }
      },[])
    return(
        <div>
           <Cmp/>
      </div>
    )
}