//HOC - Higher Order Component === decorator
import React from 'react'

export default (Component) => class Accordion extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()

        if( this.state.openArticleId == openArticleId ){
            this.setState({
                openArticleId: null
            })
        }else{
            this.setState({
                openArticleId: openArticleId
            })
        }
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }
}