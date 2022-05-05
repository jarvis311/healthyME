import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ShowRecipes = () => {
  let { _id } = useParams();

    const [getrecipe, setGetrecipe] = useState('')
    useEffect(async () => {
      const response = await fetch(`http://localhost:5000/getoneproduct/${_id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const json = await response.json()
      setGetrecipe(json.data)
      console.log(json.data);
  }, []);
  return (
    <div>
          
    </div>
  )
}
