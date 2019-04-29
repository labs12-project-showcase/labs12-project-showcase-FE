import React from 'react';

class ContactForm extends Component {
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
                <form>
                    <input
                    placeholder='Name'
                    />
                    
                    <input
                    placeholder='Email'
                    />
                    
                    <input
                    placeholder='Message...'
                    />

                    <button onClick={() => this.onSubmit()} />
                
                </form>
            </div>
         );
    }
}
 
export default ContactForm;