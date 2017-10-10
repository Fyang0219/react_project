
import {render} from 'react-dom';
import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello World!</p>
                <ChildComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));