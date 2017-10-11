
import {render} from 'react-dom';
import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: {
                all: [],
                filtered: []
            },
            category: null,
            filters: {
                image: null,
                link: null,
                categories: []
            },
            loaded: false,
            showBanner: false
        };
    }
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