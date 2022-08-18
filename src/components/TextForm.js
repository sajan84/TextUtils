import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,settext]=useState("")
    const handleOnChange=(event)=>{
        // console.log("onChange")
        settext(event.target.value)
    }
    const handleUpclick=(event)=>{
        // console.log('Upper click was clicked')
        settext(text.toUpperCase())
        props.showAlert("convert to UpperCase",'success')
        
    }
    const handleLowclick=()=>{
      settext(text.toLocaleLowerCase())
      props.showAlert("convert to LowerCase",'success')
    }
    const handleClearText=()=>{
      settext('')
      props.showAlert('Cleard Text !','success')
    }
    const handleCopyText=()=>{
      let copyText = document.getElementById("myBox");
    
      copyText.select()
      navigator.clipboard.writeText(copyText.value);
      document.getSelection().removeAllRanges();
      props.showAlert("copied to Clipboard",'success')

    }

   
  return (
    <>
   
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className="mb-4" style={{color:props.mode==='dark'?'white':'black'} }>{props.heading}</h2>
        <div className="mb-3">
         <textarea className="form-control" value={text} placeholder="Enter you text" onChange={handleOnChange} id="myBox" rows="8"></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert To UpperCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert To LowerCase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
         

    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4 className='my-2'>{text.split(/\s+/).filter(function(el) {return el.length !== 0}).length} words and {text.length} Character</h4>
        <p><span><b>Time:</b></span>{0.008*text.split(/\s+/).filter(function(el) {return el.length !== 0}).length}minutes Need to read </p>
        <h4>preview</h4>
        <p>{text.length>0?text:"Nothing to preview !"}</p>
    </div>

    </>


  )
}
