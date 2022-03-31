import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashStyle.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AdminDashbord = () => {

  const [product, setProduct] = useState({ product_name: "", description: "", fat: "", calories: "", carbohydrates: "", fiber: "", sugars: "", protein: "", vitamin_c: "", vitamin_a: "", vitamins_and_minerals: "", image: "", role: "", catagory: "" })

  const [catagory, setCatagory] = useState([]);
  const navigate = useNavigate();

  const options = [
    {
      label: "Select Catagory...",
      value: "",
    },
    {
      label: "Fruit and vegetables",
      value: "62137adbdce70d126345c76c",
    },
    {
      label: "Dairy Food",
      value: "62139494db5ddb47fa28a04f",
    },
    {
      label: "Protein Food",
      value: "622b00413a5c224b98aee392",
    },
  ];
  const handele = (e) => {
    setCatagory(e.target.value)
  }

  const [role, setRole] = useState([]);
  const roleOptions = [
    {
      label: "Select Your Role...",
      value: "",
    },
    {
      label: "Admin",
      value: "620cbc4f650d9ecba3728abe",
    },
    {
      label: "Customer",
      value: "620f35aa44ccdc8ede3e90df",
    }
  ];
  const handeleRole = (e) => {
    setRole(e.target.value)
  }



  // const [imageUpload, setImageUpload] = useState("")
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { product_name, description, fat, calories, carbohydrates, fiber, sugars, protein, vitamin_c, vitamin_a, vitamins_and_minerals } = product;
    const response = await fetch('http://localhost:5000/addproduct', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product_name, description, fat, calories, carbohydrates, fiber, sugars, protein, vitamin_c, vitamin_a, vitamins_and_minerals, role, catagory })
    },  

    );

    const json = await response.json();
    if (json.addSuccess) {
      toast("You Product Are Add Successfully")
      setTimeout(() => {
        navigate('/')   
      }, 2000);
      
    } else {
      toast("Invalid Input")
      console.log(json);
    }

    

  }
  const onchange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  // const iamgeUploade = (event) => {
  //   console.log();
  //   setImageUpload({ ...product, image: event.target.files[0] })

  // }

  return (






    <div className="container my-4">
      <div className="title">Add Product</div>
      <div className="content">
        <form action="#" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Product Name</span>
              <input type="text" onChange={onchange} id="product_name" name='product_name' required />
            </div>
            <div className="input-box">
              <span className="details">Discription</span>
              <input type="text" onChange={onchange} id="description" name='description' required />
            </div>
            <div className="input-box">
              <span className="details">Fat</span>
              <input type="text" onChange={onchange} id="fat" name='fat' required />
            </div>
            <div className="input-box">
              <span className="details">Calories</span>
              <input type="text" onChange={onchange} id="calories" name='calories' required />
            </div>
            <div className="input-box">
              <span className="details">Carbohydrates</span>
              <input type="text" onChange={onchange} id="carbohydrates" name='carbohydrates' required />
            </div>
            <div className="input-box">
              <span className="details">Fiber</span>
              <input type="text" onChange={onchange} id="fiber" name='fiber' required />
            </div>
            <div className="input-box">
              <span className="details">Sugars</span>
              <input type="text" onChange={onchange} id="sugars" name='sugars' required />
            </div>
            <div className="input-box">
              <span className="details">Protein</span>
              <input type="text" onChange={onchange} id="protein" name='protein' required />
            </div>
            <div className="input-box">
              <span className="details">Vitamin C</span>
              <input type="text" onChange={onchange} id="vitamin_c" name='vitamin_c' required />
            </div>
            <div className="input-box">
              <span className="details">Vitamin A</span>
              <input type="text" onChange={onchange} id="vitamin_a" name='vitamin_a' required />
            </div>

            <div className="input-box">
              <span className="details">Vitamins and Minerals</span>
              <input type="text" onChange={onchange} id="vitamins_and_minerals" name='vitamins_and_minerals' required />
            </div>

            <select className='selectCat' onChange={(e) => { handeleRole(e) }} value={role} >
              {roleOptions.map((roleOptions) => (
                  <option value={roleOptions.value}>{roleOptions.label}</option>
              ))}
            </select>

 
            <select className='selectCat' onChange={(e) => { handele(e) }} value={catagory} >
              {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
              ))}
            </select>

            
            <div className="input-box">
              <span className="details">Image</span>
              <input className='file' accept="image/*"  id="image" name='image' type="file" required />
            </div>

          </div>

          <div className="button">
            <input type="submit" value="Add Product" />
          </div>
          <ToastContainer/>
        </form>
      </div>
    </div>



  )
}
