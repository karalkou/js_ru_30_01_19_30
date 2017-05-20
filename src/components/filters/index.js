import React, { Component } from 'react';
import SelectFilter from './SelectFilter';
import DateRange from './DateRange';

class Filters extends Component {
    state = {};

    render() {
        const {articles} = this.props;
        return (
            <div>
                <SelectFilter articles={articles}/>
                <DateRange/>
            </div>
        )
    }

}

export default Filters;