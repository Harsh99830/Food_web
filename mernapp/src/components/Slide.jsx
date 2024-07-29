import React from 'react'

export default function Slide() {
  return (
    <div>
      <form className="d-flex" style={{marginTop:"50px"}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
  )
}
