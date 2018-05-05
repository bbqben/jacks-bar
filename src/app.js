import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <p>Hello World!</p>
            </div>
        )
    } 
} // End of class App

ReactDOM.render(<App />, document.getElementById('app'));