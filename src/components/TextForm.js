import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase invoked");
        let newText=text.toUpperCase();
        setText(newText); 
        if(newText.length>0){
            props.showAlert('Converted to upper case!','success');
        }else{
            props.showAlert('Input Text first!','warning');
        }
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        if(newText.length>0){
            props.showAlert('Converted to lower case!','success');
        }else{
            props.showAlert('Input Text first!','warning');
        }
        setText(newText);
        
    }
    const handleOnChange = (event)=>{
        // console.log("handle on change");
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        if(text.length>0){
            props.showAlert('Cleared Text!','success');
        }else{
            props.showAlert('Input Text first!','warning');
        }
        let newText='';
        setText(newText);
        
    }
    const handleCapitalClick = ()=>{
        let newText=text.charAt(0).toUpperCase()+ text.slice(1).toLowerCase();
        setText(newText);
        if(newText.length>0){
            props.showAlert('First letter changed to upper Case!','success');
        }else{
            props.showAlert('Input Text first!','warning');
        }
    }
    const handleCopy = ()=>{

        let newText=document.getElementById('myBox');
        if(newText.value.length>0){
            props.showAlert('Text copied to clipboard!','success'); 
        }else{
            props.showAlert('Input Text first!','warning');
        }
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleSpace = ()=>{
        let newText= text.split(/[ ]+/);
        if(text.length>0){
            props.showAlert('Removed extra spaces!','success');
        }else{
            props.showAlert('Input Text first!','warning');
        }
        setText(newText.join(" ")); 
        
    }
    const [ text, setText ] = useState('');
    // text="harsh is here";//wrong way to change the state
    // setText("harsh is here");//correct way to change the state
  return (
    <>
    <div  className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalClick}>Capitalized case</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        
        
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Text Summary here</h2>
        <p>{text.split(/\s+/).length - 1} words and {text.length} characters.</p>
        <p>{0.008 * (text.split(/\s+/).length - 1)} Minutes take to read.</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: 'Enter Text Above for preview.'}</p>
    </div>
    </>
  )
}
