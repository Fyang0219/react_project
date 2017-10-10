import React from 'react';

class ChildComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount: 0};
        this.onLike = this.onLike.bind(this);
    }

    onLike() {
        console.log('called');
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }
    render() {
        return (
            <div>
                Likes: <span>{this.state.likesCount}</span>
                <button onClick={this.onLike}>Like Me</button>
            </div>
        );
    }
}

export default ChildComponent;