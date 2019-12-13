import React from 'react'
import Typography from '@material-ui/core/Typography';
import EventComponentAppointment from './AffirmationEventComponent';
import EventComponentReservation from './ReservationAffirmationEventComponent';

import appointmentRequests from '../../appointmentRequests';
import reservationRequests from '../../reservationRequests';

class AffirmationView extends React.Component {

    render() {
        let appointmentArray = [];
        let reservationArray = [];

        if (appointmentRequests.length === 0) {
            appointmentArray.push(
                <div>
                    <Typography>&ensp; Alles erledigt.</Typography>
                </div>
            )
        }
        else {
            for (let i = 0; i < appointmentRequests.length; i++) {
                appointmentArray.push(
                    <EventComponentAppointment event={appointmentRequests[i]} key={ i }/>
                );
            }
        }
        if (reservationRequests.length === 0) {
            reservationArray.push(
                <div>
                    <Typography>&ensp; Alles erledigt.</Typography>
                </div>
            )
        }
        else {
            for (let i = 0; i < reservationRequests.length; i++) {
                reservationArray.push(
                    <EventComponentReservation event={reservationRequests[i]} key={i}/>
                );
            }
        }

        return (
            <div>
                <div>
                    <Typography>&ensp; Terminanfragen:</Typography>
                    {appointmentArray}
                </div>
                <div>
                    <Typography>&ensp; Reservierungsanfragen:</Typography>
                    {reservationArray}
                </div>
            </div>
            )
    }
}

export default AffirmationView;

