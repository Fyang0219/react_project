import React, { Component } from 'react';
import CreatePost from './post/create';

class App extends Component {

    handlePostSubmit(payload) {
        if (!payload.content) {
            return;
        }

        const oldPosts = this.state.posts;
        oldPosts.unshift(payload);

        this.setState({
            posts: oldPosts, 

        });

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch('{process.env.ENDPOINT}/posts', requestOptions)
            .then(res => {
                if (res.ok === true) {
                    this.fetchPosts();
                }
            });
    }

    render() {
        return (
            <div>
                <CreatePost onSubmit={this.handlePostSubmit} />
            </div>
        );
    }
}

export default App;

