import React from 'react';

class AccountsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
         );
    }
}
 
export default AccountsButtons;