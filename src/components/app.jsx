import React, { Component } from 'react';
import CreatePost from './post/create';

class App extends Component {


    render() {
        return (
            <div>
                <CreatePost onSubmit={this.handlePostSubmit} />
            </div>
        );
    }
}

export default App;

