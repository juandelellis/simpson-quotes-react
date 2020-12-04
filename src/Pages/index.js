import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Home({tittle, imageUrl, body}) {
    return (
        <div className="card-container">
           <div className="card-wrap"> 
             <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
            <div className="card-tittle">
               <h3>{tittle}</h3> 
            </div>
            <div className="card-body">
              <p>{body}</p>  
            </div>
            </div>
            <div className="btn">
              <button>
                  <a href='/simpsonquotes'>
                      Click to search
                  </a>
                  </button>  
            </div>
            </div>
        </div>
    )
};

export default Home
