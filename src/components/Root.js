import React, { Component, PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import Menu, {MenuItem} from './Menu'
import simpleLocalization from '../simpleLocalization'

class Root extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        lang: 'EN'
    }

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        simpleLocalization: PropTypes.object,
    }

    getChildContext() {
        return {
            user: this.state.user,
            lang: this.state.lang,
            simpleLocalization
        }
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <div>
                        <label htmlFor="">
                            EN
                            <input
                                type="radio"
                                value="EN"
                                checked={this.state.lang === 'EN'}
                                onChange={this.handleOptionChange}
                            />
                        </label>
                        <label htmlFor="">
                            RU
                            <input
                                type="radio"
                                value="RU"
                                checked={this.state.lang === 'RU'}
                                onChange={this.handleOptionChange}
                            />
                        </label>
                    </div>
                    <input value={this.state.user} onChange={this.handleUserChange} />
                    <Menu>
                        <MenuItem path="/articles" />
                        <MenuItem path="/filters" />
                        <MenuItem path="/counter" />
                        <MenuItem path="/comments/1" />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }

    handleOptionChange = ev => {
        this.setState({
            lang: ev.target.value
        })
    }
}

export default Root