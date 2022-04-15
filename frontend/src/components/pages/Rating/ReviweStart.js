import React, { useState } from 'react'
import Rate from './Rate';
export const ReviweStart = () => {
const [rating, setRating] = useState(0);

  return (
    <div>
<div className="row">
  <div className="col">
    <h2>Rate Me</h2>
    <Rate rating={rating} onRating={(rate) => setRating(rate)} />
    <h4 className='ratingCount text-center'> {rating}.0</h4>
  </div>
</div>
    </div>
  )
}
