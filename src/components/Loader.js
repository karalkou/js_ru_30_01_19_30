import React, { PropTypes } from 'react'

class Loader extends React.Component {
    render (){
        return (
            <h2>{this.context.simpleLocalization[this.context.lang]['Loading']}...</h2>
        )
    }

}

Loader.propTypes = {
}

Loader.contextTypes = {
    lang: PropTypes.string,
    simpleLocalization: PropTypes.object,
}

export default Loader