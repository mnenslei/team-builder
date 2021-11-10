import React from "react";



const Form = (props) => {

    return (
        <form>
            <label> Name
                <input 
                    type='text'
                    placeholder='Enter name'
                    value={values.name}
                    onChange={onChange}
                    maxLength='30'
                />
            </label>
        </form>
    )
}

export default Form;