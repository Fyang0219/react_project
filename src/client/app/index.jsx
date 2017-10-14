
import {render} from 'react-dom';
import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.fetchPosts =this.fetchPosts.bind(this);
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
            <div className="app">
                <p>Post App - Coming soon!</p>
                <ChildComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));