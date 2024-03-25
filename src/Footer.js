import React from 'react'
import Fb from './asset/facebook.png'
import Msg from './asset/messenger.png'
import Tele from './asset/telephone.png'
import check from './asset/check.png'
import circle from './asset/circle.png'
import './css/Footer.css'
import logo from './asset/bitlogo2.png'

function Footer() {
  return (
    <div class="footer">
        <div class="texts">
            
            <img className='bitlogo' src={logo}></img>
            <p >Bannari Amman Institute of Technology</p>
            
            <div class="logo">
            <ul>
                <li>
                  <a href="http://www.facebook.com" target="blank">
                    <img src={Fb} /></a>
                </li>
                <li>
                  <a href="http://www.twitter.com" target="blank"><img src={Msg} /></a>
                </li>
                <li>
                  <a href="" target="blank"><img src={Tele} /></a>   
                </li>
                <li>
                    <a href="" target="blank"><img src={check}/></a>   
                </li>
                <li>
                    <a href="" target="blank"><img src={circle}/></a>   
                </li>
              </ul>
            </div>
        </div>
        <div class="columns">
            <div class="col">
            <h3>Address</h3>
            <p>Alathukombai - Post,</p>
            <p>Sathyamangalam - 638 401,</p>
            <p>Erode District, </p>
            <p>Tamil Nadu,
            India.</p>
            </div>

            <div class="col">
                <h3>Links</h3>
                <a href='wiki.bitsathy.ac.in'>wiki.bitsathy.ac.in</a><br></br>
                <a href='wiki.bitsathy.ac.in'>moodle.bitsathy.ac.in</a><br></br>
                <a href='wiki.bitsathy.ac.in'>supportdesk.bitsathy.ac.in</a><br></br>
            </div>
            <div class="col">
                <h3>Contact</h3>
                <p>stayahead@bitsathy.ac.in</p>
                <p>0+1154 4545 5484</p>
                <p>1455 7879 5648</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
