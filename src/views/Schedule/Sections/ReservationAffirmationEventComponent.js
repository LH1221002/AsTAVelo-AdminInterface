import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from "moment";
import * as dateMath from 'date-arithmetic'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';


export default function EventComponentReservation(props) {
    //const classes = useStyles();

    return (
        <div> 
            &ensp;&ensp; NotImplementedYet
            <IconButton color="primary" aria-label="Accept">
            <CheckIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Decline">
            <ClearIcon />
            </IconButton>
        </div>
    )
}
