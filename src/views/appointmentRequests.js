import moment from "moment";

const now = new Date()

export default [
    {
        id:0,
        date: now,
        type: unescape("R%FCckgabe"),
        bikes: 1,
        name: "Maximilia Musterfrau",
    },
    {
        id: 1,
        date: moment("2020-1-4")._d,
        type: "Abholung",
        bikes: 2,
        name: "Max Mustermann",
    },
    {
        id: 1,
        date: moment("2020-1-8")._d,
        type: "Abholung",
        bikes: 1,
        name: "Peter Lustig",
    },
]
