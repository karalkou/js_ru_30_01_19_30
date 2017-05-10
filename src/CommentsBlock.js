import React, {Component} from 'react'

export default class CommentsBlock extends Component {
    render(){
        const {articles} = this.props;
        const articleElements = 'ho'/*articles.map((article) => <li key={article.id}>
            <Article article={article} defaultOpen={true}/>
        </li>)*/;

        let buttonText = 'show/hide';

        return (
            <div>
                <button>{buttonText}</button>
                <ul>
                    {articleElements}
                </ul>
            </div>

        )
    }

}