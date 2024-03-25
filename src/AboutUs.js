import React from 'react'
import './css/AboutUs.css'
import eye from './asset/eye.png'
import mission from './asset/mission.png'
import policy from './asset/target.png'
import lab from './asset/flask.png'
import placement from './asset/hiring.png'
import trophy from './asset/trophy.png'

function AboutUs() {
  return (
    <div className='About'>
        <div className='Image-div'>
            <div className='Img'>
            </div>
            <div className='Text'>
            <h3>Abbout BIT</h3>
            <p>Bannari Amman Institute of Technology is an Autonomous,
                Self-financing Engineering College, Approved by AICTE, New Delhi and Affiliated to Anna University, 
                Chennai. Nestled on the banks of The River Bhavani,
                BIT campus provides environment for learning in harmony with nature, away from the odds of the city life. 
                The spacious and the earth hugging buildings punctuated with landscaped courtyards and pathways are designed to 
                emphasise the business ethics and or characteristics of an excellent centre for learning. The Campus hosts well planned academic blocks,
                computer centres, lecture halls, libraries, laboratories, conference halls, staff quarters, hostels and students' centres. The Campus also houses
                a co-operative store, ATM (Axis, SBI and KVB) and a clinic to attend to the general health of the students and staff.</p>
            </div>
        </div>
        {/* vission */}
        <div className="services">
    <h1>Get Your Learning Journy Started with BIT</h1>
    <h2>With Proper Guidance and Learning Space </h2>
    <h2>Build Your Career With Us!</h2>
    <div class="service-box">
        <div className="s-box">
            <img src={eye}></img>
            <h1>VISION</h1>          
            <h2>"Our vision is to be a premier institution of higher learning that fosters excellence in education, research, and community engagement. 
                We aim to cultivate a diverse and inclusive environment that inspires innovation."
                </h2>
        </div>
        <div className="s-box">
            <img src={mission}></img>
            <h1>MISSION</h1>
            <h2>Our mission is to provide a transformative education that empowers students to achieve their fullest potential academically, 
                professionally. We are committed to fostering a vibrant intellectual community that promotes creativity
                and ethical leadership. 
                </h2>
        </div>
        <div className="s-box">
            <img src={policy}></img>
            <h1>GOAL</h1>            
            <h2>The goal of our college is to empower students to become lifelong learners and responsible global citizens. 
                We strive to provide a transformative educational experience that fosters intellectual curiosity, critical thinking, and creativity. 
                </h2>
        </div>
    </div>
    </div>

    {/* special  */}
<div id="services">
    <div class="container">
        <h1 className="sub-title">Explore What BIT Offers</h1>
        <div className="services-list">
            <div>
                <h2>SPECIAL LABS</h2>
                <img src={lab}></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tenetur autem quod placeat, eos magni quia voluptas laborum eius mollitia.
                     Nesciunt dignissimos harum quibusdam vero, tempore perferendis animi hic quo accusamus.</p>
                    
            </div>
            <div>
                <h2>PLACEMENTS</h2>
                <img src={placement}></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tenetur autem quod placeat, eos magni quia voluptas laborum eius mollitia.
                     Nesciunt dignissimos harum quibusdam vero, tempore perferendis animi hic quo accusamus.</p>
                     
            </div>
            <div>
                <h2>ACHIEVEMENTS</h2>
                <img src={trophy}></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tenetur autem quod placeat, eos magni quia voluptas laborum eius mollitia.
                     Nesciunt dignissimos harum quibusdam vero, tempore perferendis animi hic quo accusamus.</p>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default AboutUs