import React from 'react'

const Card = (props) => {
  
    console.log(props.company);

  return (
    <div>
      <div className="card">
          <div className="top">
             <img src={props.brandlogo} alt="i" />
            <button>SAVE</button>
          </div>
          <div className="center">
            <h3>{props.company} <span>5 days to go</span></h3>
             <h2>senior</h2>
             <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
             </div>
          </div>
          <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
          </div>
    </div>
  )
}

export default Card
