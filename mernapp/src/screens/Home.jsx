import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'
import Card from '../components/Card'
export default function Home() {
  const [search, setsearch] = useState('')
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([])

  const loadData = async()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      }
    })
    response = await response.json();
    setfoodItem(response[0])  
    setfoodCat(response[1])
    //  console.log(response[0],response[1])
  }

  useEffect(()=>{
    loadData()
  },[])




  return (
    <> 
    <Navbar/>
    <div>
      <form className="d-flex container" style={{marginTop:"50px",width:"1100px"}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </form>
    </div>
    <div className='container'>
    {
      
      foodCat.length !== 0
      ?foodCat.map((category)=>{
      
        return (
          <div className='row mb-3'>
          <div key={category._id} className='fs-3 m-3'>{category.CategoryName}</div>
          <div><hr /></div>
          {
            foodItem.length !== 0

            ?foodItem.filter((items)=>items.CategoryName === category.CategoryName && (items.name.toLowerCase().includes(search.toLowerCase())))
            .map(filterItems =>{
              
              return(
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'><Card foodName = {filterItems.name} options = {filterItems.options[0]} imgsrc = {filterItems.img}/></div>
              )
            }):""
          }

       </div>
        )
      }):""
    }

    </div>
    <Footer/>
    </>
  )
}
