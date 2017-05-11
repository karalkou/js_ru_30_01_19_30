import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentsBlock extends Component {
    state={
        isOpen: false
    };

    render(){
        let buttonText = 'show/hide';

        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isOpen ? 'Hide' : 'Show'}</button>
                <ul>
                    {this.getBody()}
                </ul>
            </div>

        )
    };

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if (!this.state.isOpen) return null;

        const {article} = this.props;
        const comments = article.comments;
        const commentsElements = comments.map((comment) => <li key={comment.id}>
            <Comment comment={comment}/>
        </li>);

        return (
            <ul>
                {commentsElements}
            </ul>
        )
    };
}