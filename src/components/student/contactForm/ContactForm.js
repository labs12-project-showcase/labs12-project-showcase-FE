import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: ''
         };

    };
    render() { 
        return ( 
            <div className = 'contactForm'>

                <form className = 'contact'>
                    <input
                    className='name'
                    placeholder='Name'
                    />
                    
                    <input
                    className='email'
                    placeholder='Email'
                    />
                    
                    <input
                    className='message'
                    placeholder='Message...'
                    />

                    <button 
                    type = 'submit' 
                    value = 'Submit'> 
                    Submit </button>
                
                </form>
         
            </div>
         );
    }

}
 
export default ContactForm;