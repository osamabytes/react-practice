import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }
    const handleLowClick = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
    }
    const handleClearClick = () => {
        setText('');
    }
    const handleCopyClick = () => {
        let textBox = document.querySelector("textarea");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handlepascalCaseClick = () => {
        // Conventional Method
        let words = text.trim().split(" ");
        let result = "";
        words.forEach(word => {
            result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) + " ";
        });
        setText(result);
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    return (
        <>
        <div>
            <div className="mb-3">
                <label className="form-label">{props.heading}</label>
                <textarea className="form-control" 
                    onChange={handleOnChange} rows="8" 
                    value={text}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handlepascalCaseClick}>Convert to PascalCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes Read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
