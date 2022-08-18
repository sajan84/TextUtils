import React,{useState}from 'react'

export default function About(props) {
  // const [Mystyle,setMystle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let Mystyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white',
    border:'1px solid',
    borderColor:props.mode==='dark'?'white':'white'
  }
  // const [Btn,setBtn]=useState('Enable Dark Mode')

  // const toggleMode=()=>{
  //   if (Mystyle.color==='black') {
  //     setMystle({
  //       backgroundColor:'black',
  //       color:'white',
  //       border:'1px solid white'
  //     })
  //     setBtn('Enable light Mode')
  //   }
  //   else{
  //     setMystle({
  //       backgroundColor:'white',
  //       color:'black'
       
  //     })
  //     setBtn('Enable Dark Mode')
  //   }
  // }

  return (
    
    <div className='container' >
      
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>About us</h2>
      <div className="accordion" id="accordionExample"  >
      
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mystyle}>
      <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils give you a way to analyze your text quickly and efficiently. Be it word count,Charcter count 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={Mystyle}>
        <strong>   Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils a free charcter counter tool that provide instant charcter count and word count stastics for a given text. TextUtils reports the number of words and charcter.Thus it is suitable to for writing text with word/charcter limits.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={Mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mystyle}>
       <strong> Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any browser such as chrome,firefox,Internet Exloper,safari,opera. It suits to count chracters in facebook,blog,book,twitter,excel document ,pdf document ,eassay,etc.
      </div>
    </div>
  </div>
</div>

{/* <div className="container">
<button type="button" className="btn btn-primary my-3" onClick={toggleMode}>{Btn}</button>
</div> */}
    </div>
  )
}
