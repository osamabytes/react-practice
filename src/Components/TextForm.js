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
    const handlepascalCaseClick = () => {
        // Conventional Method
        let textToCamelCase = text;
        let textArr = textToCamelCase.trim().split(" ");
        let finalText = '';
        textArr.forEach(word => {
            let tempWord = word.slice(1);
            console.log(tempWord);
            finalText += (word[0].toUpperCase() + (tempWord.length > 0 ? tempWord.toLowerCase() : "")) + " ";
        });
        setText(finalText);
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
