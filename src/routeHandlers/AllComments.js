import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'
import Loader from '../components/Loader'
import {loadAllComments} from '../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'

class AllComments extends Component {
    static propTypes = {};

    componentDidMount() {
        const {loadAllComments, comments} = this.props
        if( !comments.isAllElemsLoaded ) loadAllComments()
    }

    render() {
        return (
            <div>
                <h3>Comments List</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {

        const {comments} = this.props

        if (!comments.isAllElemsLoaded) {
            return <Loader />
        }

        if (!comments.entities.size) return (<div>
            <h3>No comments yet</h3>
        </div>)

        const commentItems = mapToArr(comments.entities).map(item => <li key={item.id}><Comment id={item.id} /></li>)
        return <div>
            <ul>{commentItems}</ul>
        </div>
    }
}

export default connect(
    (state, props) => {
        const comments = state.comments
        return { comments }
    },
    { loadAllComments }
)(AllComments)