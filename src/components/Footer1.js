// import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
// import ContactForm from '../components/ContactForm'


const FooterComponent = () =>{

    const navigate = useNavigate();

    
        return (
            <div>
                <footer className = "footer h-16">
                    <span><button onClick={() => navigate("/contactForm")}>Contact Us</button></span>
                    <br/>
                    <span>Employee Management System under the Internal Training Program.</span>
                </footer>
            </div>
        )
    
}

export default FooterComponent