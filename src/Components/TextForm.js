import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div>
            <div className="mb-3">
                <label className="form-label">{props.heading}</label>
                <textarea className="form-control" 
                    onChange={handleOnChange} rows="8" 
                    value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}
