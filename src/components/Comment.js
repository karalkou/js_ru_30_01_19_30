import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

function Comment(props) {
    const {text, user} = props.comment;
    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    })
};

export default connect((state, props) => {
    const { id } = props;
    const comment = state.comments.entities[id];
    return { comment }
})(Comment)