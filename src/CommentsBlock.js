import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsBlock extends Component {
    render(){
        const {article} = this.props;
        const comments = article.comments;
        const commentsElements = comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment}/>
        </li>);

        let buttonText = 'show/hide';

        return (
            <div>
                <button>{buttonText}</button>
                <ul>
                    {commentsElements}
                </ul>
            </div>

        )
    }

}