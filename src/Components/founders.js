import React from 'react'

const Founders = () => {
    return (
        <div className = "founders_container">
            <div className = "imageContainer">
                <img alt = "okay" />
            </div>
            <div id = "blank"></div>
            <div className = "content">
                <h5><strong>An update from our founders</strong></h5>
                <p><strong>Our Efforts to Serve You under Lockdown Constraints</strong></p>
                <span>
                    <span id="content_span"> 11 April 2020, 11.30 AM </span>
                    <a href="http://www.google.com"> Read Note <span className="glyphicon glyphicon-chevron-right"></span></a>
              </span>
              <hr />
              <h6><strong>Previous Notes</strong></h6>
                <p><strong>Travel in the times of COVID-19</strong></p>
                <span>
                    <span> 17 March 2020, 01.30 PM </span>
                    <a href="http://www.google.com"> Read Note <span className="glyphicon glyphicon-chevron-right"></span></a>
              </span>
              <div id = "blank"></div>
            </div>
            
        </div>
    )
}

export default Founders;