import React from 'react'
import styled from 'styled-components'

export const Main = () => {
    return (
        <div>
            <MainContainer>

            <div id="main">

                <div className="head">
                    <div className="col-div-6">
                        <span style={{ "font-size": "30px", "cursor": "pointer", "color": "white" }} className="nav"  >☰ Dashboard</span>
                        <span style={{ "font-size": "30px", "cursor": "pointer", "color": "white" }} className="nav2"  >☰ Dashboard</span>
                    </div>

                    <div className="col-div-6">
                        <div className="profile">
                            <img src="images/user.png" className="pro-img" />
                            <p>Manoj Adhikari <span>UI / UX DESIGNER</span></p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>

                <div className="clearfix"></div>
                <br />

                <div className="col-div-3">
                    <div className="box">
                        <p>67<br /><span>Customers</span></p>
                        <i className="fa fa-users box-icon"></i>
                    </div>
                </div>
                <div className="col-div-3">
                    <div className="box">
                        <p>88<br /><span>Projects</span></p>
                        <i className="fa fa-list box-icon"></i>
                    </div>
                </div>
                <div className="col-div-3">
                    <div className="box">
                        <p>99<br /><span>Orders</span></p>
                        <i className="fa fa-shopping-bag box-icon"></i>
                    </div>
                </div>
                <div className="col-div-3">
                    <div className="box">
                        <p>78<br /><span>Tasks</span></p>
                        <i className="fa fa-tasks box-icon"></i>
                    </div>
                </div>
                <div className="clearfix"></div>
                <br /><br />
                <div className="col-div-8">
                    <div className="box-8">
                        <div className="content-box">
                            <p>Top Selling Projects <span>Sell All</span></p>
                            <br />
                            <table>
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th>Country</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Francisco Chang</td>
                                    <td>Mexico</td>
                                </tr>
                                <tr>
                                    <td>Ernst Handel</td>
                                    <td>Roland Mendel</td>
                                    <td>Austria</td>
                                </tr>
                                <tr>
                                    <td>Island Trading</td>
                                    <td>Helen Bennett</td>
                                    <td>UK</td>
                                </tr>


                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-div-4">
                    <div className="box-4">
                        <div className="content-box">
                            <p>Total Sale <span>Sell All</span></p>

                            <div className="circle-wrap">
                                <div className="circle">
                                    <div className="mask full">
                                        <div className="fill"></div>
                                    </div>
                                    <div className="mask half">
                                        <div className="fill"></div>
                                    </div>
                                    <div className="inside-circle"> 70% </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>
            </div>
            </MainContainer>

        </div>
    )
}

const MainContainer = styled.div
    `
#main {
    transition: margin-left .5s;
    padding: 16px;
    margin-left: 300px;
    height: 100vh;
    
  }
  .head{
      padding:20px;
  }
  .col-div-6{
      width: 50%;
      float: left;
  }
  .profile{
      display: inline-block;
      float: right;
      width: 160px;
  }
  .pro-img{
      float: left;
      width: 40px;
      margin-top: 5px;
  }
  .profile p{
      color: white;
      font-weight: 500;
      margin-left: 55px;
      margin-top: 10px;
      font-size: 13.5px;
  }
  .profile p span{
      font-weight: 400;
      font-size: 12px;
      display: block;
      color: #8e8b8b;
  }
  .col-div-3{
      width: 25%;
      float: left;
  }
  .box{
      width: 85%;
      height: 100px;
      background-color: #272c4a;
      margin-left: 10px;
      padding:10px;
  }
  .box p{
       font-size: 35px;
      color: white;
      font-weight: bold;
      line-height: 30px;
      padding-left: 10px;
      margin-top: 20px;
      display: inline-block;
  }
  .box p span{
      font-size: 20px;
      font-weight: 400;
      color: #818181;
  }
  .box-icon{
      font-size: 40px!important;
      float: right;
      margin-top: 35px!important;
      color: #818181;
      padding-right: 10px;
  }
  .col-div-8{
      width: 70%;
      float: left;
  }
  .col-div-4{
      width: 30%;
      float: left;
  }
  .content-box{
      padding: 20px;
  }
  .content-box p{
      margin: 0px;
      font-size: 20px;
      color: #f7403b;
  }
  .content-box p span{
      float: right;
      background-color: #ddd;
      padding: 3px 10px;
      font-size: 15px;
  }
  .box-8, .box-4{
      width: 95%;
      background-color: #272c4a;
      height: 330px;
      
  }
  .nav2{
      display: none;
  }
  
  .box-8{
      margin-left: 10px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    
  }
  td, th {
    text-align: left;
    padding:15px;
    color: #ddd;
    border-bottom: 1px solid #81818140;
  }
  .circle-wrap {
    margin: 50px auto;
    width: 150px;
    height: 150px;
    background: #e6e2e7;
    border-radius: 50%;
  }
  .circle-wrap .circle .mask,
  .circle-wrap .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }
  .circle-wrap .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }
  
  .circle-wrap .circle .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #f7403b;
  }
  .circle-wrap .circle .mask.full,
  .circle-wrap .circle .fill {
    animation: fill ease-in-out 3s;
    transform: rotate(126deg);
  }

`