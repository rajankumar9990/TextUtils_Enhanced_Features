import React from 'react';
import Footer from './Footer';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid black',
    borderRadius: '8px',
    padding: '15px',
  };

  return (
    <div className="container my-4">
      <h1 className="my-3 text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        About TextUtils
      </h1>

      <div className="accordion" id="accordionExample">
        {/* Section 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Powerful Text Manipulation</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a simple yet powerful web application designed to help users modify and analyze text effortlessly. Whether you need to convert text to uppercase, lowercase, clear text, or remove extra spaces, TextUtils provides a seamless experience with just a click.
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Enhanced User Experience & Accessibility</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              With Speak to Stop functionality, users can have their text read aloud, making it accessible for those who prefer auditory assistance. The dark mode feature enhances readability in low-light conditions, ensuring a comfortable user experience at all times.
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Real-Time Text Analysis</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils goes beyond simple transformations by offering real-time word and character count, making it ideal for students, writers, and professionals. Whether you are drafting an email, writing an article, or checking text length for social media, TextUtils has got you covered! 🚀
            </div>
          </div>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
    
  );
  
  
}
