import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentsRoot extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <h1>Comments pagination</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentsRoot