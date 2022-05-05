import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

export const InfoBlog = () => {

  let { _id } = useParams();

  const [getblog, setGetblog] = useState([])
  useEffect(async () => {
    const response = await fetch(`http://localhost:5000/getoneblog/${_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json(_id)
    setGetblog(json.data)

  }, []);

  return (
    <MainContainersBlog1>

      <div className='container-3'>


        <div className="row ">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container-2">

                  <h1>{getblog.title}</h1>
                  <p className='peetag'>{getblog.description}</p>
                  <h5>{getblog.para1}</h5>
                  <p>{getblog.heading1}</p>
                  <h5>{getblog.para2}</h5>
                  <p>{getblog.heading2}</p>
                  <h5>{getblog.para3}</h5>
                  <p>{getblog.heading3}</p>
                  <h5>{getblog.para4}</h5>
                  <p>{getblog.heading4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>

    
    </MainContainersBlog1 >
  )
}


const MainContainersBlog1 = styled.div


  `
.container-3{
  width:100%;
}
.peetag{
  overflow-wrap: break-word;
  overflow: inherit;
}
h5{
  font-weight: bold;
}

`