import React, { useState } from 'react'

export default function About() {
    const[myStyle, setMyStyle] = useState(  {
        color:"black",
        backgroundColor:"white"
        
    })
    const [btntext, setBtntext]=useState("Enable Dark Mode")
  const toggleStyle=()=>{
    if(myStyle.color==='black'){
        setMyStyle({
            color:"white",
        backgroundColor:"black",
        border:'1px solid white'
        })
        setBtntext("Enable Light Mode");
    }
    else{
        setMyStyle({
            color:"black",
        backgroundColor:"white"
        })
        setBtntext("Enable Dark Mode");
    }

  }
  return (
    <div className="container" style={myStyle}>
        <h1 className='my-2'>
            About Us
        </h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Powerful Text Manipulation</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <p>
        TextUtils is a simple yet powerful web application designed to help users modify and analyze text effortlessly. Whether you need to convert text to uppercase or lowercase, clear text, or remove extra spaces, TextUtils provides a seamless experience with just a click.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Enhanced User Experience & Accessibility</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
        <p>
        With Speak to Stop functionality, users can have their text read aloud, making it accessible for those who prefer auditory assistance. The dark mode feature enhances readability in low-light conditions, ensuring a comfortable user experience at all times.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Real-Time Text Analysis</strong>

      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
       <p>
       TextUtils goes beyond simple transformations by offering real-time word and character count, making it ideal for students, writers, and professionals. Whether you are drafting an email, writing an article, or checking text length for social media, TextUtils has got you covered! 🚀
       </p>
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle}  type="button" className="btn btn-dark">{btntext}</button>
</div>

    </div>
  )
}
