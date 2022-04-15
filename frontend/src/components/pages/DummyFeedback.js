 import axios from 'axios';
import React, { useState } from 'react'

export const DummyFeedback = () => {

    const [feed, setFeed] = useState({feedback:"", productId:""})


    const submit = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:5000/addfeedback`,{
            feedback:feed.feedback,
            productId:feed.productId
        }).then(res =>{
            alert("yes")
            console.log(res.data);
        })
    }


    const handel = (e) =>{
     const newdata = {...feed}       
     newdata[e.target.name] = e.target.value
     setFeed(newdata)
     console.log(newdata);
    }
    

    return (
        <div>
            <form action="" onSubmit={submit}>

             <div className="mb-3">
                <label for="feddback" className="form-label">Feedback</label>
                <textarea className="form-control"  onChange={(e)=>handel(e)} id="feedback" value={feed.feedback} name='feedback' rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="productId" className="form-label">ProductId</label>
                <input type="text" name='productId' onChange={(e)=>handel(e)} className="form-control" value={feed.productId} id="exampleFormControlInput1" placeholder=""/>
            </div>
            <button type='submit' className='btn btn-success'>Post</button>
            </form>
           
        </div>
    )
}
