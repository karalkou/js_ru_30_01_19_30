import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { loadCommentsForPage } from '../AC'
import Loader from './Loader'

class CommentsPage extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        //From redux connect:
        pageIds: PropTypes.object,
        total: PropTypes.number
    };

    componentDidMount() { checkAndLoad(this.props) }

    componentWillReceiveProps = checkAndLoad

    render() {
        const { total, pageIdArrayItem, page } = this.props
        if (!total) return <Loader />
        if ( (page - 1) * 5 >= total ) return <h3>No comments for this page</h3>
        if (!pageIdArrayItem || !pageIdArrayItem.size) return <Loader />

        const commentItems = pageIdArrayItem.map(id => <li key = {id}><Comment id = {id} /></li>)
        return (
            <div>
                <h4>Comments page</h4>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

function checkAndLoad(props) {
    const { page, pageIdArrayItem, loadCommentsForPage } = props
    console.log('page: ', page)
    console.log('pageIdArrayItem: ', pageIdArrayItem)
    
    if (!pageIdArrayItem) loadCommentsForPage(page)
}

export default connect((state, props) => {
    const pageIdArrayItem = state.comments.getIn(['pagination', props.page])
    const total = state.comments.total
    return { pageIdArrayItem, total }
}, { loadCommentsForPage })(CommentsPage)