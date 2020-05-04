import React from 'react'
import Tabs from './tabs'
const Flights = () => {
    return(
        <div>
           <h3>Flights</h3>
           <p><strong>I already have my flights booked. How do I change or cancel my bookings?</strong></p>
           <p>We are working closely with our partners to extend complete support and comfort to our travellers for all domestic and international bookings.</p>
            <p>We are working in tandem with our airline partners to offer an option to change their travel dates with no-fee charge, and passing full fee waiver benefits rolled out by our partners to our bookers. For flights impacted by the lockdown, IndiGo & SpiceJet have converted existing bookings to credit vouchers to allow customers to create new bookings. <a href="http://www.google.com">Click here</a> for details on how to use your credit voucher.
            For date change for your domestic flight ticket booked on Indigo, SpiceJet or Go Air, you do not have to call us. For your convenience and quick resolution, we have updated the online self-support available on the web and app with applicable waiver, cancellation and refund details. Simply follow the instructions to get a date change done.</p>
            <p>Please locate the Airline you are booked on in the section below and check if your booking is eligible for a
            full refund on cancellation, or a date change without penalty.</p>

            <Tabs />
        </div>
    )
}

export default Flights;