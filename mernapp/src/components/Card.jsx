import React from 'react'
 import { Link } from 'react-router-dom'
export default function Card(props) {

  let options = props.options
  let priceOptions = Object.keys(options)



    const HandleAddToCart =()=>{

    }
  return (
    <div> 
      <div><div className="card mt-3" style={{"width": "18rem","maxHeight":"400px"}}>
  <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:"220px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodName}</h5>
    {/* <p className="card-text">Some quick example.</p> */} 
    <div className='container w-100'>
      <select name="" id="" className=' h-100 bg-success rounded'>
        {Array.from(Array(6),(e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select name="" id="" className='m-2 h-100 bg-success rounded'>
        {priceOptions.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })}
      </select>

      <div className='d-inline h-100 fw-bold'>
        Total price
      </div>
    </div>
      <hr />
    <Link to={'/'} className="btn btn-success justify-center ms-2" onClick={HandleAddToCart}>Add to cart</Link>
  </div>
</div></div>
    </div>
  )
}
