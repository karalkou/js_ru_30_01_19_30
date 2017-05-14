import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    componentDidMount() { console.log('---', 'mounted') }

    componentWillReceiveProps(nextProps) {
        console.log('--- componentWillReceiveProps ---\n', this.props, nextProps)
    }

    componentWillUnmount() { console.log('---', 'unmounting') }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CommentList