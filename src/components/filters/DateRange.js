import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux';
import {changeDateRange} from '../../AC';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        filters: PropTypes.object.isRequired
    };

    handleDayClick = (e, day) => {
        const { filters } = this.props;
        this.props.changeDateRange(DateUtils.addDayToRange(day, filters.dateRange))
    };

    render() {
        const { filters } = this.props;
        const { from, to } = filters.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(
    (state) => {
        return{
            filters: state.filters
        }
    },
    { changeDateRange }
)(DateRange);