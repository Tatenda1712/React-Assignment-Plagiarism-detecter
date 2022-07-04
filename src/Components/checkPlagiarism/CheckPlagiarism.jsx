import "./check.css"
import { useState } from "react"
import {Link, useHistory} from 'react-router-dom'
export default function CheckPlagiarism(){
    const [text, setPlagtext]=useState('');
    const [results, setResults]=useState('');
    let [resulturl, setURL]=useState([]);
    const [validate, setValidate]=useState("");
    const history=useHistory();

    async function checkPlagiarism(){
        if(text==""){
            setValidate("No text entered for plagiarism checking")
        }
        else{
            console.warn(text)
            let result = await fetch("http://127.0.0.1:5000/studentreport",{
                method:'POST',
                body:JSON.stringify(text),
                headers:{
                  "Content-Type": 'text/plain',
                  "Accept":'text/plain'
                }
              })
                result = await result.json();
                setResults(result)
                console.warn("result", result)
                if(result){
                    localStorage.setItem('result',result)
                    setResults(result)
            
                }
                else{
                    setValidate("Unkown Error!!! Please Try Again")
                }
        }
    }

  
 
    return(
        <div className="col-md-6 text-center">
                <div class="form-group">
                <div className="iterate-object">
</div>
                    <textarea className="form-control" rows="8" id="checktext" placeholder="Paste text to check for plagiarism or Upload your document....Note that the uploaded document will not be saved.." value={text} onChange={ (e)=>setPlagtext(e.target.value)} ></textarea>
                    <h5 className="text-danger mb-2">{validate}</h5>
                    <button onClick={checkPlagiarism} type="submit" class="btn btn-danger mt-2 mb-5 text-right">Check Plagiarism</button>
                </div>
                {
                 <div>
                <div className="table-responsive">
                <table className="table table-light table-hover table-striped ">
                    <thead className="thead-dark">
                      <tr className="table-dark">
                        <th>Plagiarism Link</th>
                        <th>Plagiarism %</th>
                      </tr>
                    </thead>
                    <tbody>
  		{Object.keys(results).map(function(keyName, keyIndex) {
    		return (
            <tr key={keyName}>
            <td><a href={keyName} target="_blank">{keyName}</a></td>
            <td> {results[keyName]}%</td>
          </tr>
    		)
		})}
           </tbody>
                  </table>
              </div>
        </div>
}
         </div>
    )
}