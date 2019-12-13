import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
//import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import AffirmationView from "./Sections/AffirmationView.js";

import myDay from "./Sections/customView.js"

import styles from "assets/jss/material-kit-react/views/components.js";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/de'
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from '../events'
import { useState, useEffect } from 'react';


moment.locale("de");
const localizer = momentLocalizer(moment);
const myEventsList = events

const useStyles = makeStyles(styles);

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Schedule(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const messages = {
        allDay: 'Tageszeit',
        previous: '<',
        next: '>',
        today: 'Heute',
        month: 'Monat',
        week: 'Woche',
        day: 'Tag',
        agenda: 'Agenda',
        date: 'Datum',
        time: 'Zeit',
        event: 'Termin',
        showMore: total => `+ ${total} Weitere Termine`
    }
    const views = {
        month: true,
        day: myDay,
        //agenda: true,
    }
    const { height, width } = useWindowDimensions();
    let ratio = width / height;
    let flexDirectionString;
    let boxWidthLeftBox;
    let boxWidthRightBox;
    if (ratio > 1.1) {
        flexDirectionString = "row";
        boxWidthLeftBox = "60%";
        boxWidthRightBox = "40%";
    }
    else {
        flexDirectionString = "column"
        boxWidthLeftBox = "100%";
        boxWidthRightBox = "100%";
    }

    return (
        <div>
            <div>
                <Header
                    brand="Admin Interface"
                    rightLinks={<HeaderLinks />}
                    color="dark"
                    fixed
                    {...rest}
                />
            </div>
            <Box display="flex" flexDirection={flexDirectionString} flexWrap="wrap">
                <Box width={boxWidthLeftBox} >
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <Box height={1000}>
                            <Calendar
                                localizer={localizer}
                                events={myEventsList}
                                startAccessor="start"
                                endAccessor="end"
                                views={views}
                                drilldownView="day"
                                messages={messages}
                            />
                        </Box>
                    </div>
                </Box>
                <Box width={boxWidthRightBox}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <AffirmationView />
                    </div>
                </Box>
            </Box>
        </div>
    );
}
