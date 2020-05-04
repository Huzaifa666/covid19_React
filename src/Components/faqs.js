import React from 'react'
import Item from './collapse_items'
 

const faqs = () => {
    return (
        <div className = "flights_container">
            <h3>Frequently Asked Questions (FAQs)</h3>
            <Item answer = {"A Credit Voucher/Shell is a credit note issued by airlines, against a cancelled PNR.This can be used for future booking, against the actual amount of the flight ticket, with the same airline, for the same passenger(s)."} 
                  question = {"What is a Credit Voucher or Credit Shell?"}/>

            <Item answer = {"Airlines that are offering credit voucher are IndiGo and SpiceJet"} 
                  question = {"Which airlines are currently offering credit vouchers in lieu of bookings that were auto-cancelled due to lockdown?"} />

            <Item answer = {"Booking using a credit voucher is allowed only if the number of passengers and the name of the passenger is the same."} 
                  question = {"Can the passenger name or number of passengers change?"} />
            
            <Item answer = {"Claiming a refund against your credit voucher amount is not possible. You may use it to book your future travel."} 
                  question = {"Can I claim a refund against the credit voucher amount issued to me?"} />

            <Item answer = {"Credit voucher amount can be used partially. In case of a partially used credit voucher, the unutilized amount is displayed against your original booking and is safe with the airline. We are working on enabling the functionality to redeem the unutilized amount to make new bookings."} 
                  question = {"Can a credit voucher be used partially?"} />
        </div>
    )
}

export default faqs;