import React from "react";



const Form = (props) => {
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name
                <input 
                    type='text'
                    placeholder='Enter name'
                    value={props.values.name}
                    name='name'
                    onChange={handleChange}
                    maxLength='30'
                />
            </label>

            <label> Email
                <input
                    type='email'
                    placeholder='Enter valid email address'
                    value={props.values.email}
                    name='email'
                    onChange={handleChange}
                />
            </label>

            <label> Role
                <input 
                    type='text'
                    placeholder='Enter role here'
                    value={props.values.role}
                    name='role'
                    onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your team' />
        </form>
    )
}

export default Form;