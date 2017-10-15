
import {render} from 'react-dom';
import React from 'react';
import ChildComponent from './ChildComponent.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
        this.fetchPosts =this.fetchPosts.bind(this);
        this.state = {
            nPosts: 5,
            posts: [],
            loaded: false
        };
    }

    componentDidMount() {
        this.fetchPosts()
            .then( () => this.setState({loaded: true}))
            .catch( err => console.error(err));
    }

    fetchPosts(increment = false) {
        const limit = 5;
        const nPosts = increment ? this.state.nPosts + limit : this.state.nPosts;
        this.setState({nPosts});

        return fetch('${process.env.ENDPOINT}/posts?_limit=${nPosts}&_sort=date&_order=DESC')
            .then( res => res.json())
            .then(posts => this.setState({ posts }));
    }
    render() {
        return (
            <div className="posts">
                {
                    this.state.loaded ?
                        this.state.posts.map(post => {
                            return (
                                <div className="post">
                                    {post.content}
                                </div>
                            );
                        })
                    :
                    <div className="loader">
                            loading!
                    </div>
                }
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));