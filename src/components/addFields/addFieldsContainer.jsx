import { useState } from "react"
import "./addFieldsContainer.css";

export const AddFieldsContainer = () => {
    const fieldsObj = {
        input:""
    }
    const [inputFields, setInputFields] = useState([]);

    const handleOnChange = (event , index) => {
        const {name, value} = event.target;
        const fieldsList = [...inputFields];
        fieldsList[index][name] = value;
        setInputFields(fieldsList);
    }

    const addInputField = () => {
        setInputFields([...inputFields, fieldsObj])
    }

    const removeInputField = (index) => {
        const fieldsList = [...inputFields];
        fieldsList.splice(index, 1);
        setInputFields(fieldsList);
    }

    return (
        <div className="add-fields-container">
            <button onClick={() =>{addInputField()}}>
                Add Text Input +
            </button>
            <br/>
            <div className="input-fields-container">
            {inputFields.map((fieldObj, index)=>{
                return(
                <div className="input-field" key={index}>
                    <label for={`input${index}`} className="input-label">
                        Input {index}
                    </label>
                    <input 
                        name="input" 
                        id={`input${index}`}
                        placeholder="Enter"  
                        className="input-box"
                        type="text" 
                        value={fieldObj.input} 
                        onChange={(event)=>{handleOnChange(event , index)}}
                    />
                    <button 
                        className="input-remove-btn" 
                        onClick={()=>{removeInputField(index)}}>Remove</button>
                    <br/>
                </div>
                )
            })}
            </div>
        </div>
    )
}