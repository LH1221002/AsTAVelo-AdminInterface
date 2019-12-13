import React from 'react'
import Typography from '@material-ui/core/Typography';

import * as dates from 'date-arithmetic'
import { Navigate } from 'react-big-calendar'
import events from '../../events'

import * as dateMath from 'date-arithmetic'
import EventComponent from './AsTAEventComponent';

class MyDay extends React.Component {

    render() {
        let { date } = this.props
        let todaysEvents = [];
        var eve;
        var i;
        for (i = 0; i < events.length; i++) {                           //Complexity of n --> not perfect
            eve = events[i];
            if (dateMath.inRange(date, eve.start, dateMath.subtract(eve.end,1,"hours"), "day")) {
                todaysEvents.push(eve);
            }
        }
        // Build an array of items
        let array = [];
        for (let i = 0; i < todaysEvents.length; i++) {
            array.push(
                <EventComponent event={todaysEvents[i]} key={i}/>
            );
        }

        if (array.length === 0) {
            return (
                <div>
                    <Typography>&ensp; Keine Termine f&uuml;r heute.</Typography>
                </div>
                )
        }
        return <div>
            <Typography>&ensp; Heutige Termine:</Typography>
            {array}
        </div>
    }
}

MyDay.navigate = (date, action) => {
    switch (action) {
        case Navigate.PREVIOUS:
            return dates.add(date, -1, 'day')

        case Navigate.NEXT:
            return dates.add(date, 1, 'day')

        default:
            return date
    }
}

MyDay.title = date => {
    return `${date.toLocaleDateString()}`
}

export default MyDay;

