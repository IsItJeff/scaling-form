import { useState } from "react"

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
            {inputFields.map((fieldObj, index)=>{
                return(
                <div key={index}>
                    <label>
                        Input {index}
                    </label>
                    <input 
                        name="input" 
                        placeholder="Enter" 
                        className="inputField" 
                        type="text" 
                        value={fieldObj.input} 
                        onChange={(event)=>{handleOnChange(event , index)}}
                    />
                    <button onClick={()=>{removeInputField(index)}}>Remove</button>
                    <br/>
                </div>
                )
            })}
        </div>
    )
}