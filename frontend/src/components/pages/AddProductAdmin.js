import React, { useEffect, useState } from 'react'
import './dashStyle.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AdminPanal } from './AdminPanal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddProductAdmin = () => {

  const [email, setemail] = useState('')

  const [catagory, setCatagory] = useState([]);
  const navigate = useNavigate();

  const [catid, setCatid] = useState('')
  // const [catagory, setcatagory] = useState([])
  const getCategories = async (e) => {

    await axios.get('http://localhost:5000/getcatagory').then((res) => {
      setCatagory(res.data.data)
      setCatid(e.target.value)
    })
  }
  useEffect(() => {
    getCategories()
    return () => {
    }
  }, [])


  // const handele = (e) => {
  //   setCatagory(e.target.value)
  //   console.log(e.target.value);
  // }

  let role = "620cbc4f650d9ecba3728abe"


  const [filename, setFilename] = useState([]);
  const imageUpload = (e) => {
    setFilename(e.target.files[0])
  }




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
  const [advantage, setAdvantage] = useState('')
  const [disadvantage, setDisadvantage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("image",filename);
    formData.append("image", filename);
    formData.append("product_name", product_name)
    formData.append("description", description)
    formData.append("fat", fat)
    formData.append("calories", calories)
    formData.append("carbohydrates", carbohydrates)
    formData.append("fiber", fiber)
    formData.append("sugars", sugars)
    formData.append("protein", protein)
    formData.append("vitamin_c", vitamin_c)
    formData.append("vitamin_a", vitamin_a)
    formData.append("vitamins_and_minerals", vitamins_and_minerals)
    formData.append("advantage", advantage)
    formData.append("disadvantage", disadvantage)
    formData.append("role", role)
    formData.append("catagory", catid)


    axios.post('http://localhost:5000/addproductByAdmin', formData)
      .then((res) => {
        if (res.addSuccess = true) {
          toast("Product Add Succesfull")
          console.log(res.data)
          setTimeout(() => {
            navigate('/')
          }, 2000);
        } else {
          toast("Invalid input")
        }
      }



      )
  }






  useEffect(() => {

    setemail(localStorage.getItem('abcd') && localStorage.getItem('Role') === 'admin')

  }, [])
  return (
    <div>
      {
        email ?
          <>
            <AdminPanal />
            <div className='mainPanalContaine'>


              <div className="container my-4">
                <div className="title">Add Product By Admin</div>
                <div className="content">
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="user-details">
                      <div className="input-box">
                        <span className="details">Product Name</span>
                        <input type="text" onChange={(e) => setProduct_name(e.target.value)} id="product_name" value={product_name} name='product_name' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Discription</span>
                        <input type="text" onChange={(e) => setDescription(e.target.value)} id="description" value={description} name='description' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Fat</span>
                        <input type="text" onChange={(e) => setFat(e.target.value)} id="fat" value={fat} name='fat' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Calories</span>
                        <input type="text" onChange={(e) => setCalories(e.target.value)} id="calories" value={calories} name='calories' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Carbohydrates</span>
                        <input type="text" onChange={(e) => setCarbohydrates(e.target.value)} id="carbohydrates" value={carbohydrates} name='carbohydrates' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Fiber</span>
                        <input type="text" onChange={(e) => setFiber(e.target.value)} id="fiber" value={fiber} name='fiber' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Sugars</span>
                        <input type="text" onChange={(e) => setSugars(e.target.value)} id="sugars" value={sugars} name='sugars' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Protein</span>
                        <input type="text" onChange={(e) => setProtein(e.target.value)} id="protein" value={protein} name='protein' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Vitamin C</span>
                        <input type="text" onChange={(e) => setVitamin_c(e.target.value)} id="vitamin_c" value={vitamin_c} name='vitamin_c' required />
                      </div>
                      <div className="input-box">
                        <span className="details">Vitamin A</span>
                        <input type="text" onChange={(e) => setVitamin_a(e.target.value)} id="vitamin_a" value={vitamin_a} name='vitamin_a' required />
                      </div>

                      <div className="input-box">
                        <span className="details">Calsium</span>
                        <input type="text" onChange={(e) => setVitamins_and_minerals(e.target.value)} id="vitamins_and_minerals" value={vitamins_and_minerals} name='vitamins_and_minerals' required />
                      </div>

                      <div className="input-box">
                        <span className="details">Advantage</span>
                        <input type="text" onChange={(e) => setAdvantage(e.target.value)} id="advantage" value={advantage} name='advantage'  />
                      </div>
                      <div className="input-box">
                        <span className="details">Disadvantage</span>
                        <input type="text" onChange={(e) => setDisadvantage(e.target.value)} id="disadvantage" value={disadvantage} name='disadvantage'  />
                      </div>

                      {/* <select className='selectCat' name='role' onChange={(e) => { handeleRole(e) }} value={role} >
                        {roleOptions.map((roleOptions) => (
                          <option value={roleOptions.value}>{roleOptions.label}</option>
                        ))}
                      </select> */}


                      {/* <select className='selectCat' name="catagory" onChange={(e) => { handele(e) }} value={catagory} >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select> */}

                      <select className='selectCat' name="catagory" onChange={(e) => { getCategories(e) }}>

                        <option>Select Catagory...  </option>
                        {
                          catagory.map((cat) => {
                            return (
                              <>
                                <option value={cat._id}> {cat.CatagoryName} </option>
                              </>
                            )
                          })
                        }

                      </select>


                      <div className="input-box">
                        <span className="details">Image</span>

                        <input type="file" name='image' filename='image' className="form-control file" onChange={imageUpload} id="image" aria-describedby="image" required />
                      </div>

                    </div>

                    <div className="button">

                      <input type="submit" value="Add Product" />
                    </div>

                    <ToastContainer />
                  </form>
                </div>
              </div>




            </div>
          </>

          : <h1>Please Login As Admin </h1>
      }

    </div>
  )
}

