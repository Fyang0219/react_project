import React, {propTypes} from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <p className="content">
                {post.content}
            </p>
        </div>
    )
}

Post.propTypes = {
    post: propTypes.object.isRequired
}

export default Post;