import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/expense-e6319.appspot.com/o/88237105_531239220842109_8638242241937720963_n.jpg?alt=media&token=3925027f-a093-4c36-bce9-67b70e7a4d4c"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Piampong Punroop (610610700)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/deploymyreact/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
