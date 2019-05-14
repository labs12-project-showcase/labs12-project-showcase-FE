import React from 'react';

class CohortsButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClickEdit = (e) => {
        e.stopPropagation();
    }

    handleClickDelete = (e) => {
        e.stopPropagation();
    }

    render() { 
        return ( 
            <div>
                <button onClick={(e) => e.stopPropagation()}>Edit</button>
                <button onClick={this.handleClickDelete}>Delete</button>
            </div>
         );
    }
}
 
export default CohortsButtons;