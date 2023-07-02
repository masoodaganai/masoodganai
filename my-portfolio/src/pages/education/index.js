import React from 'react'
import './style.css'

const Education = () => {
  return (
    <div>  <body >

    <section className="education" style={{backgroundImage: `url(https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`}}>
      <div className="education-details" >   
        <h2>Education Details</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>Bachelor's  In Computer Applications</h3>
            <p className="institution">&nbsp; ➣&nbsp;Maharaja Ranjit Singh Punjab technical University</p>
            <p className="duration">&nbsp;2017 - 2020</p>
          </div>
          <div className="education-item">
            <h3>Master's In Computer Applications</h3>
           
            <p className="institution">  &nbsp;➣ &nbsp;Chandigarh University</p>
            <p className="duration">&nbsp;2021 - 2023</p>
          </div>
          <div className="education-item">
            <h3>Ph.D. Degree In Artificial Intelligence</h3>
            <p className="institution" > &nbsp;➣&nbsp; University of Amman(Jordan)</p> 
            <p className="duration">&nbsp;2023 - Present</p>
          </div>
        </div>
      </div>
    </section>
  </body>
  

  
  </div>
  )
}

export default Education