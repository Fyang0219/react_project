import React, { Component } from 'react';
import Filter from 'bad-words';

const filter = new Filter();

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
        
        const content = filter.clean(event.target.value);
        this.setState({ 
            content: content,
            valid: content.length >= 300,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handling submission');
        if(!this.state.valid) {
            return;
        }
        const newPost = {
            data: Date.now(),
            id: Date.now(),
            content: this.state.content
        };

        this.props.onSubmit(newPost);
        this.setState({
            content: '',
            valid: null
        });

        console.log(this.state);
    }

    render() {
        return (
            <form className="create-post" onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.content}
                    onChange={this.handlePostChange} 
                    placeholder="What's on your mind" />
                {
                    this.state.valid ?
                        <div> your post is too long! : </div>
                        :
                        null
                }
                <input type="submit" placeholder="Post" className="btn btn-default" disabled={this.state.valid}/>
            </form>
        );
    }
}

CreatePost.propTypes = {};

export default CreatePost;