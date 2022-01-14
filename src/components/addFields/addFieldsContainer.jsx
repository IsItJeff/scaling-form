import { useState } from "react"

export const AddFieldsContainer = () =>{
    const fieldsObj = {}
    const [inputChange, setInputChange] = useState([]);

    const handleOnChange = (value) =>{
        setInputChange(value)
    }

    const submitChanges = () => {
        
    }

    const addInputField = () => {

    }

    const removeInputField = (index) => {

    }

    return (
        <div>
            <button>
                Add Field +
            </button>
            <br/>
            <label>
                Input One
                <input name="inputOne" type="text" onChange={(event)=>{handleOnChange(event.target.value)}}/>
            </label>
        </div>
    )
}