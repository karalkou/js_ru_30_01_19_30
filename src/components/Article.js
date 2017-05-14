import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
//import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {

    render() {
        const {article, toggleOpen} = this.props
        return (
            <div>
                <h3 onClick={toggleOpen}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen, article: {text, comments}} = this.props
        if (!isOpen) return null

        return (
            <section>
                {text}
                <CommentList comments={comments}/>
            </section>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired
}

export default Article