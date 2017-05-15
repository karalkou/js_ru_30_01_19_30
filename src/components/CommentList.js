import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }

    static defaultProps = {
        comments: []
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }

    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false,
        text: '',
        user: ''
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
                <div>
                    Text: <input type="text" value={this.state.text} onChange={this.handleChange('text')}/>
                    User: <input type="text" value={this.state.user} onChange={this.handleChange('user')}/>
                    <button type="submit" onClick={this.clearInputs}>Submit</button>
                </div>
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

    handleChange = name => (ev) => {
        this.setState({
            [name]: ev.target.value
        })
    }

    clearInputs = (ev) => {
        ev.preventDefault()
        this.setState({
            user: '',
            text: ''
        })
    }
}

export default CommentList