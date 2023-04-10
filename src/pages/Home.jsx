import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

const optionsQ1 = [
    'Bus',
    'Metro',
    'Own Two-wheeler',
    'Own Car',
    'Walk / Bicycle',
    'Auto',
    'App based ride hailing cab services including Ola / Uber',
];

const optionsQ2 = [
    '<5km',
    '5-10km',
    '10-15km',
    '15-20km',
    '20-25km',
    '>25km',
];

const Home = () => {
    
    useEffect(() => {
        Aos.init({duration: 700});
    }, []);


    const [selectedOptionQ1, setSelectedOptionQ1] = useState('');
    const [selectedOptionQ2, setSelectedOptionQ2] = useState('');

    const handleOptionChangeQ1 = (event) => {
        setSelectedOptionQ1(event.target.value);
    };

    const handleOptionChangeQ2 = (event) => {
        setSelectedOptionQ2(event.target.value);
    };
    return (
        <div className='container' data-aos="fade-up">
            <div className="page-heading">
                <h1>Respondent Travel Profile</h1>
            </div>

            <div className='card-wrapper'>
            <div className="card-item"  data-aos="fade-up">
                <h2 id='question-heading'>Q1: What is your most frequently used means of travel from your home to work location?</h2>
                <form>
                    {optionsQ1.map((option, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOptionQ1 === option}
                                onChange={handleOptionChangeQ1}
                            />
                            {option}<br />
                        </label>
                    ))}
                </form>

            </div>

            <div className="card-item" data-aos="fade-up">
                <h2 id='question-heading'>Q2: What is the total distance between your home and workplace?</h2>
                <form>
                    {optionsQ2.map((option, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOptionQ2 === option}
                                onChange={handleOptionChangeQ2}
                            />
                            {option}<br />
                        </label>
                    ))}
                </form>

            </div>
            </div>

        
        <div className="button-section">
        {selectedOptionQ2 && selectedOptionQ1 ? (
                <Link to="/mode-choice" state={{ distance: selectedOptionQ2, travelMode: selectedOptionQ1 }} className="button">
                    Next &#8250;
                </Link>
            ) : (
                <p>Please answer the above questions to proceed further</p>
            )}

        </div>


            







        </div>
    )
}

export default Home