import './css/sports.css';
import React, { useState } from 'react';
import image1 from './asset/s1.jpg';
import image2 from './asset/s2.jpg';
import image3 from './asset/s3.jpg';
import image4 from './asset/s4.jpg';
import image5 from './asset/s5.jpg';
import image6 from './asset/s6.jpg';

function Sports() {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    let timeoutId = null; // Declare timeoutId here

    const handleMouseDown = (e) => {
        setMouseDownAt(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = mouseDownAt - e.clientX;
        const maxDelta = window.innerWidth / 2;
        let percentage = ((mouseDelta/70) / maxDelta) * -100;
        let nextPercentage = prevPercentage + percentage;

        // Enforce minimum and maximum values
        nextPercentage = Math.min(0, nextPercentage);
        nextPercentage = Math.max(-30, nextPercentage);
        
        // Update state
        setPrevPercentage(nextPercentage);

        // Apply transformation with a delay
        clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => {
            const track = document.getElementById('imageTrack');
            track.style.transform = `translate(${nextPercentage}%, -15%)`;
        }, 100); // Adjust delay here (in milliseconds)
        
        // Apply animation to images
        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            image.animate([
                { objectPosition: `${100 + nextPercentage}% center` },
                { objectPosition: `${100 + nextPercentage}% center` }
            ], {
                duration: 1200,
                fill: 'forwards'
            });
        });
    };

    const handleMouseUp = () => {   
        setMouseDownAt(0);
    };

    return (
        <div className='SportsMain'>
            <h1 style={{ textAlign: "center" }}>Sports</h1>
            <div
                id="imageTrack"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                data-mouse-down-at={mouseDownAt}
                data-prev-percentage={prevPercentage}
            >
                <img className='image' src={image1} alt="" draggable="false" />
                <img className='image' src={image2} alt="" draggable="false" />
                <img className='image' src={image3} alt="" draggable="false" />
                <img className='image' src={image4} alt="" draggable="false" />
                <img className='image' src={image5} alt="" draggable="false" />
            </div>

            <div className='SportSub'>
                <img src={image1} alt="" />
                <div>
                    <h1>PLAY FIELD</h1>
                    <p>All necessary sports facilities with state-of-the-art technology are available in the campus. The Existing         sports facilities for students includes 400 m standard athletic track with 8 lanes including a Long Jump &        Triple Jump Pit, Sectors for Shot-put, Discus & Javelin throws, In additional, it has also a standard bed for         High jump and Pole vault events, a football field and two kho- kho courts, a Hockey field with kerb, 65 m radius         cricket field with two net practice pitches & one portable nets, two Volleyball courts, two Ball Badminton            Courts, one Handball Courts and two Kabaddi Courts. Total area of the BIT Play Field is 5,74,580 sq. ft.
                        </p>
                </div>

                <img src={image2} alt="" />
                <div>
                    <h1>SPORTS COMPLEX</h1>
                    <p>In our Sports complex, we have Standard synthetic tennis courts (2 nos.) with fencing and floodlight facilities, one volleyball court with fencing and Floodlight facilities, one multipurpose synthetic basketball court with portable and foldable backboard, fencing, floodlight facilities. This basketball court has the facility to be convert into a tennis court. Total area of indoor games facilities is 57,400 sq. ft.
                        </p>
                </div>

                <img src={image3} alt="" />
                <div>
                    <h1>INDOOR GAMES</h1>
                    <p>We provide very good recreational halls for boys and girls separately. They consist of two table tennis board & a ball Feeder, one pool table, four Carrom boards and four Chess Boards. Besides these, we have 14 semi indoor badminton courts at the hostel premises. Our students spend their leisure time in these indoor activities. Total area of indoor games facilities is 31,440 sq. ft.
                        </p>
                </div>

                <img src={image4} alt="" />
                <div>
                    <h1>GIRLS HOSTEL PLAY GROUNDS</h1>
                    <p>We give equal emphasis to physical activities along with the academic activities for girls. We provide following play grounds for girls: Volleyball court and Throwball Court with Floodlight facilities, Hockey field and multipurpose synthetic basketball court with portable & foldable backboard, floodlight facilities. This basketball court can be converted into tennis court. Total area of Girls hostel play grounds is 1, 05,049 sq. ft.
                        </p>
                </div>

                <img src={image5} alt="" />
                <div>
                    <h1>GYM</h1>
                    <p>Fully equipped and scientifically designed gym facilities are available in the boys and girls hostel separately. The boys gym consist of Three 4 station, three 2 station, 16 single station gym equipments, Weight lifting and Power lifting sets. And also we have enough barbell weights, barbell & dumbbell rods, fixed dumbbells, cattle bells and Gym Balls. For women, two 4 station equipment, three 2 station equipment, 6 single station equipment. Regularly, there are more than 100 students avail the gym facilities. Total area of gym facilities is 4,490 sq. ft.
                        </p>
                </div>

                <img src={image6} alt="" />
                <div>
                    <h1>OPEN GYM</h1>
                    <p>To promote the sports activities among the hostel students and spend their leisure time in the health related physical activities, we have provided open gym facility at men and women hostel separately. The Men’s hostel open gym consist of Abdominal baord, Air walker, Elliptical machine, Rowing Machine, seated pull down, Seated Push Trainer, Stepper Tai Chi Spinner and Twister. The total area of this facility is 2820 sq.ft. The women’s hostel open gym consist of Abdominal baord, Air walker, Elliptical machine, Rowing Machine, , Stepper Tai Chi Spinner and Twister. The total area of this facility is 3040 sq. ft.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Sports;