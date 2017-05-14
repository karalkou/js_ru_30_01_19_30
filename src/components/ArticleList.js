import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends Component {

    render() {
        const {articles, openArticleId, toggleOpenArticle} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                toggleOpen={toggleOpenArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}


ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        })
    ).isRequired
}

export default Accordion(ArticleList)