import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AddRecipes = () => {
  var _id = useParams()._id;    
    const navigate = useNavigate()
    const [recipeHeading, setRecipeHeading] = useState('')
    const [step1, setStep1] = useState('')
    const [step2, setStep2] = useState('')
    const [step3, setStep3] = useState('')
    const [step4, setStep4] = useState('')
    const [step5, setStep5] = useState('')
    const [step6, setStep6] = useState('')
    const handleSubmitForRecipe = async(e) =>{
    e.preventDefault();
    // const formData = new FormData()
    //     formData.append("recipeHeading",recipeHeading)
    //     formData.append("step1",step1)
    //     formData.append("step2",step2)
    //     formData.append("step3",step3)
    //     formData.append("step4",step4)
    //     formData.append("step5",step5)
    //     formData.append("step6",step6)

    //     axios.(`http://localhost:5000/addrecipes/${_id}`, formData)
    //     .then((res) => {
    //         toast("Product Add Succesfull, Please waiting for the Admin ")
    //         console.log(res.data)
    //         setTimeout(() => {
    //           navigate('/')
    //         }, 2000);
            
    //     })
        let recipe = await fetch(`http://localhost:5000/addrecipes/${_id}`, {
        method: 'put',
        body: JSON.stringify({recipeHeading, step1,step2,step3,step4,step5,step6 }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log(recipe.status);
      if (recipe.status == 200) {
        toast("Recipes is Add")
        setTimeout(() => {
          navigate('/')
        }, 2000);
      }
    }
  return (
    <div>
         <form className='col-md-6 center' onSubmit={handleSubmitForRecipe}>

        <div class="mb-3">
          <label for="recipeHeading" class="form-label">Type the recipe heading</label>
          <input type="text" onChange={(e) => setRecipeHeading(e.target.value)}  value={recipeHeading} name='recipeHeading' class="form-control" id="title" required/>
        </div>

        <div class="mb-3">
          <label for="step1" class="form-label">Stap 1</label>
          <input type="text" onChange={(e) => setStep1(e.target.value)}  value={step1} name='step1' class="form-control" id="step1" required/>
        </div>
        <div class="mb-3">
          <label for="step2" class="form-label">Stap 2</label>
          <input type="text" onChange={(e) => setStep2(e.target.value)}  value={step2} name='step2' class="form-control" id="step2"/>
        </div>
        <div class="mb-3">
          <label for="step3" class="form-label">Stap 3</label>
          <input type="text" onChange={(e) => setStep3(e.target.value)}  value={step3} name='step3' class="form-control" id="step3"/>
        </div>
        <div class="mb-3">
          <label for="step4" class="form-label">Stap 4</label>
          <input type="text" onChange={(e) => setStep4(e.target.value)}  value={step4} name='step4' class="form-control" id="step4"/>
        </div>
        <div class="mb-3">
          <label for="step5" class="form-label">Stap 5</label>
          <input type="text" onChange={(e) => setStep5(e.target.value)}  value={step5} name='step5' class="form-control" id="step5"/>
        </div>
        <div class="mb-3">
          <label for="step6" class="form-label">Stap 6</label>
          <input type="text" onChange={(e) => setStep6(e.target.value)}  value={step6} name='step6' class="form-control" id="step6"/>
        </div>

        <button type="submit" class="btn btn-primary">Add Recipes</button>
        <ToastContainer/>
      </form>
    </div>
  )
}
