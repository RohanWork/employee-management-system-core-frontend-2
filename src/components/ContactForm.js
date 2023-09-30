import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        return (
            <div class="BackCon">
                <form>
                    <input type="text" id="name" placeholder="Enter your name" required/>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                    <input type="number" id="call" placeholder="Enter your contact number" required/>
                    <textarea id="message" placeholder="Enter your message"/>
                    <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;