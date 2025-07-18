import { useState } from 'react'
import './App.css';

function shortenURL(u){
    try{
        new URL(u)
        return true
    }catch(e){
        return false
    }
}

export default function UrlShortener(){

    const [allRows,setAllRows] = useState([{link:"", time:"", alias:""}])
    const [doneLinks,setDoneLinks] = useState([])
    const [warn,setWarn] = useState("")

    const addRow = () => {
        if(allRows.length === 5){ 
            console.log('max rows reached')
            return
        }
        setAllRows([...allRows,{link:"",time:"",alias:""}])
    }

    const updateValue = (rowIndex,field,val) => {
        let temp = [...allRows]
        temp[rowIndex][field] = val
        setAllRows(temp)
    }

    const shorten = ()=>{
        setWarn("")
        let finalArr = []
        
        for(let idx=0; idx<allRows.length; idx++){
            let row = allRows[idx]
            let {link,time,alias} = row

            if(!shortenURL(link)){
                setWarn("Row "+(idx+1)+" has invalid url!!")
                return
            }

            if(time && isNaN(time)){
                setWarn("Row "+(idx+1)+" : minutes must be number")
                return
            }

            let code = alias && alias.trim()!=="" ? alias.trim() : "short"+(idx+1)
            let tiny = "https://shrtn.me/"+code

            finalArr.push({
                orig: link,
                short: tiny,
                expires: time? time+" min(s)" : "no expiry"
            })
        }

        console.log('Generated links ->', finalArr) 
        setDoneLinks(finalArr)
    }

    return(
        <div style={{maxWidth:"550px",margin:"25px auto",fontFamily:"Arial"}}>
            <h2>URL Shortener Page</h2>

            {allRows.map((row,idx)=>(
                <div key={idx} style={{border:"1px solid #aaa",padding:8,marginBottom:8}}>
                    <input 
                        placeholder='Original URL' 
                        style={{width:"100%",marginBottom:5}} 
                        value={row.link} 
                        onChange={e=>updateValue(idx,'link',e.target.value)}
                    />
                    <input 
                        placeholder="validity in mins" 
                        style={{width:"100%",marginBottom:5}} 
                        value={row.time} 
                        onChange={e=>updateValue(idx,'time',e.target.value)}
                    />
                    <input 
                        placeholder="custom url" 
                        style={{width:"100%"}} 
                        value={row.alias} 
                        onChange={e=>updateValue(idx,'alias',e.target.value)}
                    />
                </div>
            ))}

            {allRows.length<5 && 
                <button onClick={addRow} style={{marginBottom:10}}>+ add one more</button>
            }

            <br/>
            <button onClick={shorten}>Shorten</button>

            {warn && <p style={{color:"red"}}>{warn}</p>}

            {doneLinks.length>0 && (
                <div style={{marginTop:15}}>
                    <h3>Results</h3>
                    <ul>
                        {doneLinks.map((item,i)=>(
                            <li key={i}>
                                {item.orig} → <a href={item.short} target="_blank">{item.short}</a> 
                                {" "}({item.expires})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
