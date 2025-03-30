import React from 'react'

const InfoCard = () => {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
      <img src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      className="card-img-top img-fluid" style={{height:"20vh"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  )
}

export default InfoCard