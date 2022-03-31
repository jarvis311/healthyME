import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { MessageAlerl } from './MessageAlerl';

export const UpdateProduct = (props) => {
  const [product_name, setProduct_name] = useState('')
  const [description, setDescription] = useState('')
  const [fat, setFat] = useState('')
  const [calories, setCalories] = useState('')
  const [carbohydrates, setCarbohydrates] = useState('')
  const [fiber, setFiber] = useState('')
  const [sugars, setSugars] = useState('')
  const [protein, setProtein] = useState('')
  const [vitamin_c, setVitamin_c] = useState('')
  const [vitamin_a, setVitamin_a] = useState('')
  const [vitamins_and_minerals, setVitamins_and_minerals] = useState('')
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    updateProductFunction();
  }, [])

  const updateProductFunction = async () => {
    let result = await fetch(`http://localhost:5000/getoneproduct/${param._id}`)
    result = await result.json();
    console.log(result);
    setProduct_name(result.data.product_name)
    setDescription(result.data.description)
    setFat(result.data.fat)
    setCalories(result.data.calories)
    setCarbohydrates(result.data.carbohydrates)
    setFiber(result.data.fiber)
    setSugars(result.data.sugars)
    setProtein(result.data.protein)
    setVitamin_c(result.data.vitamin_c)
    setVitamin_a(result.data.vitamin_a)
    setVitamins_and_minerals(result.data.vitamins_and_minerals)

  }
  // const [alert, setAlert] = useState('')

  // const showAlert = (massage) => {
  //   setAlert({ msg: massage })
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(`http://localhost:5000/updateproduct/${param._id}`, {
      method: 'Put',
      body: JSON.stringify({ product_name, description, fat, calories, carbohydrates, fiber, sugars, protein, vitamin_c, vitamin_a, vitamins_and_minerals }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // result = await result.json();


    const json = await result.json();
    if (json.updateSuceess) {
      // showAlert("Product are Updeted")
      toast.success('Your Product Update Successfull!', {
        position: "top-center",
        Close: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/')
      }, 2000);
    } else {

      toast. toast.error('Invalid Input', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }

  return (
    <div>


      <div className="container my-4">
        <div className="title">Update product</div>
        <div className="content">
          <form action="#" onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Product Name</span>
                <input type="text" onChange={(e) => { setProduct_name(e.target.value) }} value={product_name} id="product_name" name='product_name' required />
              </div>
              <div className="input-box">
                <span className="details">Discription</span>
                <input type="text" onChange={(e) => { setDescription(e.target.value) }} value={description} id="description" name='description' required />
              </div>
              <div className="input-box">
                <span className="details">Fat</span>
                <input type="text" onChange={(e) => { setFat(e.target.value) }} value={fat} id="fat" name='fat' required />
              </div>
              <div className="input-box">
                <span className="details">Calories</span>
                <input type="text" onChange={(e) => { setCalories(e.target.value) }} value={calories} id="calories" name='calories' required />
              </div>
              <div className="input-box">
                <span className="details">Carbohydrates</span>
                <input type="text" onChange={(e) => { setCarbohydrates(e.target.value) }} value={carbohydrates} id="carbohydrates" name='carbohydrates' required />
              </div>
              <div className="input-box">
                <span className="details">Fiber</span>
                <input type="text" onChange={(e) => { setFiber(e.target.value) }} value={fiber} id="fiber" name='fiber' required />
              </div>
              <div className="input-box">
                <span className="details">Sugars</span>
                <input type="text" onChange={(e) => { setSugars(e.target.value) }} value={sugars} id="sugars" name='sugars' required />
              </div>
              <div className="input-box">
                <span className="details">Protein</span>
                <input type="text" onChange={(e) => { setProtein(e.target.value) }} value={protein} id="protein" name='protein' required />
              </div>
              <div className="input-box">
                <span className="details">Vitamin C</span>
                <input type="text" onChange={(e) => { setVitamin_c(e.target.value) }} value={vitamin_c} id="vitamin_c" name='vitamin_c' required />
              </div>
              <div className="input-box">
                <span className="details">Vitamin A</span>
                <input type="text" onChange={(e) => { setVitamin_a(e.target.value) }} value={vitamin_a} id="vitamin_a" name='vitamin_a' required />
              </div>

              <div className="input-box">
                <span className="details">Vitamins and Minerals</span>
                <input type="text" onChange={(e) => { setVitamins_and_minerals(e.target.value) }} value={vitamins_and_minerals} id="vitamins_and_minerals" name='vitamins_and_minerals' required />
              </div>

              {/* <div className="input-box">
              <span className="details">Role</span>
              <input type="text" onChange={onchange} id="role" name='role' required />
            </div> */}
              {/* <div className="input-box">
              <span className="details">Catagory</span>
              <input type="text" onChange={onchange} id="catagory" name='catagory'  required />
            </div> */}
              {/* <select className='selectCat' onChange={(e) => { handeleRole(e) }} value={role} >
              {roleOptions.map((roleOptions) => (
                  <option value={roleOptions.value}>{roleOptions.label}</option>
              ))}
            </select>

 
            <select className='selectCat' onChange={(e) => { handele(e) }} value={catagory} >
              {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
              ))}
            </select> */}

              {/*             
            <div className="input-box">
              <span className="details">Image</span>
              <input className='file' accept="image/*" onChange={iamgeUpload} id="image" name='image' type="file" required />
            </div> */}

            </div>

            <div className="button">
              <input onClick={handleSubmit} type="submit" value="Update Product" />
              {/* <button onClick={handleSubmit} className="btn btn-danger ">Update</button> */}
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </form>
        </div>
      </div>

    </div>
  )
}
