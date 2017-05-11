import React, {Component} from 'react'

export default class Comment extends Component {
    state = {};

    render() {
        const {comment} = this.props;

        return (
            <div>
                <div><b>{comment.user}</b></div>
                <div>{comment.text}</div>
            </div>
        )
    }
}