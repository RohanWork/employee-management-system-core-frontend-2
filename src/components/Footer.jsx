import React, { Component } from 'react'

class FooterComponent extends Component {

    render() {
        return (
            <div>
                <footer className = "footer h-16">
                    <span>Employee Management System under the Internal Training Program</span>
                    <br/>
                    <a href= './ContactForm'>Contact Us </a>
                </footer>
            </div>
        )
    }
}

export default FooterComponent