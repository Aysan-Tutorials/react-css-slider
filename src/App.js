import React, {useState} from 'react';
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa';
import slide1 from './assets/1.jpg';
import slide2 from './assets/2.jpg';
import slide3 from './assets/3.jpg';
import slide4 from './assets/4.jpg';
import './App.css';

const App = () => {
    const [playSlide, setPlaySlide] = useState(true);

    return (
        <div className="slider-container">
            {playSlide
                ?
                <FaPauseCircle className="fa-icon" onClick={()=>setPlaySlide(!playSlide)}/>
                :
                <FaPlayCircle className="fa-icon" onClick={()=>setPlaySlide(!playSlide)}/>

            }
            <div className={playSlide ? "slider play-animation" : "slider pause-animation"}>
                <div className="slide">
                    <img src={slide1} alt="slide" />
                </div>
                <div className="slide">
                    <img src={slide2} alt="slide" />
                </div>
                <div className="slide">
                    <img src={slide3} alt="slide" />
                </div>
                <div className="slide">
                    <img src={slide4} alt="slide" />
                </div>
                <div className="slide">
                    <img src={slide1} alt="slide" />
                </div>
            </div>
        </div>
    )
}

export default App
