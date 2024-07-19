import React from 'react'

export default function Carusel() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white " type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://b.zmtcdn.com/data/pictures/6/18296346/b38c57484b747050304b5c6c7b51a7d1_featured_v2.jpg" className="d-block w-100 " style={{filter:"brightness(50%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://b.zmtcdn.com/data/pictures/3/20730103/30f76cf85b0917acb6489b79ada328a0_featured_v2.jpg" className="d-block w-100"style={{filter:"brightness(50%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://b.zmtcdn.com/data/pictures/8/19263358/f1eb2e71ae31ed4c3e78ded696e29d72_featured_v2.jpg" className="d-block w-100 "style={{filter:"brightness(50%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
