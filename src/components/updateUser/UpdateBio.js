import React from 'react';
import './UpdateUser.css';

class UpdateBio extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h2>{this.props.text}</h2>
                    <p>{this.props.description}</p>
                    <div className="popup-content">
                        <textarea 
                            cols="90" rows="8" 
                            placeholder="No information given.">
                        </textarea>
                    </div>
                    <button>Submit Changes</button>
                    <button onClick={this.props.closePopup}>Back to Profile</button>
                </div>
            </div>
        );
    }
}

export default UpdateBio;