import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ErrorPage = () => {
    return (
        <div>
            <ErrorPageContainer>

            <section id="error">
                <div class="content">
                    <i class="fa fa-warning"></i>
                    <h1>401</h1>
                    <p>Error occurred! </p>
                    <p>You need to login first...</p>
                    <Link class="back" to='/signin'>Go to Login Page</Link>
                </div>
            </section>
            <footer>
                <p>© 2019 404 Error. All Rights Reserved</p>
            </footer>
            </ErrorPageContainer>
        </div>
    )
}
const ErrorPageContainer = styled.div
`
@import url('https://fonts.googleapis.com/css?family=Sniglet:400,800');

body{
    background: #95A5A6;
    font-family: 'Sniglet', cursive;

}
h1{
    text-align: center;
    font-size: 190px;
    font-weight: 400;
    margin: 0;
}
.fa{
    font-size: 120px;
    text-align: center;
    display: block;
    padding-top: 100px;
    margin: 0 auto;
    color: #A93226;
}
#error p{
    text-align: center;
    font-size: 36px;
    color: #4A235A;
}
.back{
    text-align: center;
    margin: 0 auto;
    display: block;
    text-decoration: none;
    font-size: 24px;
    background: #BA4A00;
    border-radius: 10px;
    width:55%;
    padding: 4px;
    color: #fff; 

}
footer p{
    padding-top: 160px;
    text-align: center;
}
a.w3hubs{
    text-decoration: none;
    color: #A93226;
}
@media(max-width: 550px){
    .back{
        width: 20%;
    }
}
@media(max-width: 425px){
    h1{
            padding-top: 20px;
    }
    .fa{
        padding-top: 100px;
    }
}



`