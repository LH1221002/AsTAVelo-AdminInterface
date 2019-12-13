import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import BikeIcon from '@material-ui/icons/DirectionsBike';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';


export default function EventComponentAppointment(props) {
    //const classes = useStyles();

    const [show, setShow] = React.useState(0);
    const [string, setString] = React.useState("");
    const [undo, setUndo] = React.useState(false);
    const handleDecline = () => {
        if (undo) setUndo(false)
        setString("Declined.")       
        setShow(1);             
        setTimeout(hide, 1800)
    };
    const handleAccept = () => {
        if (undo) setUndo(false)
        setString("Accepted.")
        setShow(1);             
        setTimeout(hide, 1800)
    };
    const handleUndo = () => {
        setUndo(true)
        setString("Undo")
        setShow(0)
    }
    function hide() {
        if (!undo) setShow(5)
    }
    const ev = props.event;

    const show0 = (
        <div>
            &ensp;&ensp;{ev.date.toLocaleDateString()} : {ev.type} &ensp; {ev.bikes} <BikeIcon /> &ensp; {ev.name}
            <IconButton color="primary" aria-label="Accept" onClick={handleAccept}>
                <CheckIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Decline" onClick={handleDecline} >
                <ClearIcon />
            </IconButton>
        </div>
    )
    const show1 = (
        <div>
            &ensp;&ensp;{string}
            <IconButton color="primary" aria-label="Undo" onClick={handleUndo} >
                <SettingsBackupRestoreIcon />
            </IconButton>
        </div>
    )
    const show5 = (
        <div />
    )

    if (show===0) {
        return show0
    }
    else if (show===1){
        return show1
    }
    else {
        if (!undo) {
            //delete entry from database
            return show5
        }
        else {
            setShow(0)
            setUndo(false)
            return show0
        }
    }
}
