import moment from "moment";

const now = new Date()

export default [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: moment("2019-12-3")._d,
        end: moment("2019-12-5")._d,
        pickUp: true,
    },
    {
        id: 1,
        title: 'test2',
        allDay: true,
        start: moment("2019-12-3")._d,
        end: moment("2019-12-5")._d,
        pickUp: false,
    },
    {
        id: 2,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        allDay: true,
        pickUp: false,

    },
    {
        id: 3,
        title: 'Point in Time Event',
        start: now,
        end: now,
        allDay: true,
        pickUp: true,
    },
]
