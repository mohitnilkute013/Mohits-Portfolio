import React from "react";
import '../styles/Educate.css'; // Assuming you have a CSS file for styling
import studyImage from '../assets/study-image.png';

const Education = () => {
    return (
        <section id="education">
            <h1>Education</h1>
            <div className="edu">
                <div className="desc">
                    <ul>
                        <li>
                            &#10148;
                            <h3>B.E. - Electronics and Communication Engineering (ECE)</h3>
                            <small>Minors in Computer Science</small>
                            <h5>Shri Ramdeobaba College of Engineering and Management, Nagpur</h5>
                            <small>2019 - 2023</small>
                        </li>
                        <li>
                            &#10148;
                            <h3>Class XII - PCM</h3>
                            <h5>M. K. Umathe College, Nagpur</h5>
                            <small>2017 - 2019</small>
                        </li>
                        <li>
                            &#10148;
                            <h3>Class X</h3>
                            <h5>Vimaltai Tidke Convent, Nagpur</h5>
                            <small>2016 - 2017</small>
                        </li>
                    </ul>
                </div>
                <div className="study-image">
                    <img src={studyImage} alt="study-image" />
                </div>
            </div>
        </section>
    );
};

export default Education;
