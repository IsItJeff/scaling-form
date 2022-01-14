import { useState } from "react"

export const AddFieldsContainer = () =>{
    const fieldsObj = {}
    const [inputFields, setInputFields] = useState([]);

    const handleOnChange = (value) => {
        setInputFields(... inputFields, value)
    }

    const submitChanges = () => {
        
    }

    const addInputField = () => {
        setInputFields([...inputFields, fieldsObj])
    }

    const removeInputField = (index) => {

    }
    console.log(inputFields)
    return (
        <div>
            <button onClick={() =>{addInputField()}}>
                Add Field +
            </button>
            <br/>
            {inputFields.map((field, index)=>{
                return(
                <label>
                    Input One
                    <input name="inputOne" type="text" onChange={(event)=>{handleOnChange(event.target.value)}}/>
                </label>
                )
            })}
        </div>
    )
}