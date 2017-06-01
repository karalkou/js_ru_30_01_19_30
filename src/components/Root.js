import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Menu>
                        <MenuItem path="/articles" />
                        <MenuItem path="/filters" />
                        <MenuItem path="/counter" />
                        <MenuItem path="/all_comments" />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root