import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(event) {
        console.log('handling an update to the post body');
        const content = event.target.value;
        this.setState({ content: content});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handling submission');
    }

    render() {
        return (
            <form className="create-post" onSubmit={this.handleSubmit}>
                <textarea
                    onChange={this.handlePostChange} 
                    placeholder="What's on your mind" />
                <input type="submit" placeholder="Post" className="btn btn-default"/>
            </form>
        );
    }
}

CreatePost.propTypes = {};

export default CreatePost;