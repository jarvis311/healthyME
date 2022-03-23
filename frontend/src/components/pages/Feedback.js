import React, { useState } from 'react'
import axios from 'axios';
export const Feedback = () => {

    const [feedback, setFeedback] = useState('')
    const [user, setUser] = useState('')
    const [product, setProduct] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:5000/addfeedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback,user,product})
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            alert("Feed back added")
           
        }else{
            alert("Invalid feedback");
        }

    }
    
    const onchangeProduct = (e) => {
        setProduct(e.target.value)
    }

    const onchangeFeedback = (e) => {
        setFeedback(e.target.value)
    }
    const onchangeUser = (e) => {
        setUser(e.target.value)
    }


    return (
       
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-5 feedbackUser">
                    <h4 htmlFor="feedback" className="form-label">Give Your Feedback</h4>
                    <textarea value={feedback} type="text" onChange={(e)=>{onchangeFeedback(e)}} className="form-control" name="feedback" id="feedback" rows="2"></textarea>
                </div>
                {/* <div className="form-group my-4">
                    <label htmlFor="title" className="form-label">Enter the product</label>
                    <input value={product} type="text" onChange={(e)=>{onchangeProduct(e)}} className="form-control" id="product" name='product' aria-describedby="emailHelp" required />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="user" className="form-label">Enter the user</label>
                    <input value={user} type="text" onChange={(e)=>{onchangeUser(e)}} className="form-control" id="user" name='user' aria-describedby="emailHelp" required />
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       
    )
}
