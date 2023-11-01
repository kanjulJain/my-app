import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");

    }

    const handleClearClick = ()=>{
        let newText ='';
        setText(newText);
        props.showAlert("Text cleared!","success");
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    //text="cjsk";

  return (
    <>
    <div className='container'>
        <h1 style={{color:props.mode==='light'?'#042743':'white'}}>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-2 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-2 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} mx-2 my-1`} onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter text in textbox to preview"}</p>
    </div>
    </>
  )
}
