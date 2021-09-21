import React, { useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import './AddEdit.css';
import fireDb from '../firebase.js';
import {toast} from 'react-toastify'

const initialState = {
    name:"",
    email:"",
    contact:""
}


function AddEdit() {
    const [state, setState]= useState(initialState);
    const [data, setDate] = useState({});

    const handleInputChange=(e)=>{
        const {name, value}= e.target;
        setState({...state, [name]: value})
    }
    
    const handleSubmit =()=>{
    
    }

    const {name,email,contact} = state
    return (
        <div>
            <div style={{marginTop:"100ps"}}>
                <form 
                style={
                    {margin:'auto', 
                    padding:"15px", 
                    maxWidth:"400px", 
                    alignContent:"center"}
                    }
                    onSubmit={handleSubmit}
                    >
                    <label htmlFor="name">Name</label>
                    <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={handleInputChange}>
                    </input>

                    <label htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={handleInputChange}>
                    </input>

                    <label htmlFor="contact">Contact</label>
                    <input 
                    id="contact" 
                    type="number" 
                    name="contact" 
                    placeholder="Contact No." 
                    value={contact} 
                    onChange={handleInputChange}>
                    </input>

                    <input type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
}

export default AddEdit
