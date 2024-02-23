import React, {useState} from 'react'

export default function TextForm(props) {
    const textareaStyles = {
        backgroundColor : '#282c34',
        color: 'White'
    };

    // sets state
    const [text, setText] = useState('Here to wtite..');
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

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control primary" value={text} onChange={handleOnChange} id="Textarea" rows="8" style={textareaStyles}></textarea>
            </div>
            <button type="button" className="btn btn-dark" onClick={convertToUpperCase}>{props.btn_cap}</button>
        </div>
    )
}
