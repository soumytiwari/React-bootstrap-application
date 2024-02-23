import React, {useState} from 'react'

export default function TextForm(props) {

    const textareaStyles = {
        backgroundColor : '#282c34',
        color: 'White'
    };

    // sets state
    const [text, setText] = useState('');
    // text = "ifenoi";  // wrong
    // setText('fweubifu'); // right

    const handleOnChange = (event) => {
        console.log('Typed stst')
        // this lets you write the text in textarea, else state was constant 
        setText(event.target.value)
    }

    const convertToUpperCase = () => {
        console.log('Clicked button')
        let newText = text.toUpperCase();
        // setText('You have clicked on UpperCase converter button ' + text)
        setText(newText)
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const clearText = () => {
        let newText = "";
        setText(newText)
    }

    return (
        <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control primary" value={text} onChange={handleOnChange} id="Textarea" rows="8" style={textareaStyles}></textarea>
            </div>
            <button type="button" className="btn btn-dark mx-1" onClick={convertToUpperCase}>{props.btn_cap}</button>
            <button type="button" className="btn btn-dark mx-1" onClick={convertToLowerCase}>{props.btn_low}</button>
            <button type="button" className="btn btn-dark mx-1" onClick={clearText}>Clear text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words, {text.length} characters</p>
            <h3>Time took to read: </h3>
            <p>{0.08 * text.split(' ').length} Minutes</p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
