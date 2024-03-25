import React from 'react'
import './css/Feedback.css'
import { MdOutlineFeedback } from "react-icons/md";

function Feedback() {
  function clicked() {
      const element = document.getElementById('feedback');
      const element2 = document.getElementById('feedback2');
      element.classList.remove('Feedback2');
    //   element.classList.add('removed');
    element2.style.display='block';
}

 

  return (
      <div  className='Feedback2' id='feedback'>
          <MdOutlineFeedback onClick={clicked} size={"30px"} />
          <div className='Feedback1' id='feedback2'>
              <h4>Give us your feedback</h4>
              <textarea>
                  
              </textarea>
          </div>
    </div>
  )
}

export default Feedback