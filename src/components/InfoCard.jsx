import React from 'react'
import placeholderImage from "../assets/img/lafoto.png"
import { Link } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from 'react';

const InfoCard = ({ item }) => {
  const { store, dispatch } = useGlobalReducer()
  const [liked, setLiked] = useState(null);
  const isFavorite = store.favorites.find(searchItem => searchItem.name == item.name)

  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={placeholderImage}
          className="card-img-top img-fluid" style={{ height: "20vh" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className='d-flex justify-content-between'>
            <Link className='btn btn-outline-primary' to={"/character-info/"+item.uid}> 
              LEARN MORE
            </Link>
            <button className='btn btn-warning' onClick={() =>
                dispatch({
							type: (isFavorite? 'delete_favorite' : 'add_favorite'),
							payload: isFavorite? item.uid : item
							})}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={isFavorite? "red" : "black"} className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCard