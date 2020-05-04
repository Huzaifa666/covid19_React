import React from 'react'
import Item from '../Components/collapse_items'
const Other = () => {
    return(
        <div>
            <h3>Other FAQs</h3>
            <Item question = {"What is coronavirus (COVID-19) and how does it spread?"} 
                answer = {<p>"COVID-19 is caused by a newly-identified virus that originated in Wuhan, China in December 2019. This virus belongs to the same family of viruses that cause the common flu and SARS. The symptoms of COVID-19 include cough, fever and shortness of breath. While most cases present mild to moderate symptoms
                that can be managed with timely and proper medical care, rare cases may result in severe respiratory
                problems, kidney failure or even death. Elderly people and individuals with pre-existing health conditions
                are more likely to be severely impacted.
                <br /><br />
                The new coronavirus is known to spread from person to person through saliva droplets expelled while coughing
                or sneezing. The virus does not remain suspended in air for too long, but can settle on objects such as
                furniture, appliances and clothing. Symptoms of the disease usually show up after 14 days of contracting the
                infection. The diagnosis of COVID-19 can only be confirmed via a laboratory test."</p>}/>

            <Item question = {"How many countries are affected by coronavirus?"} 
                answer = {<p>COVID-19 was declared a pandemic by WHO on 11 March, 2020. As of 13th
                March, 2020, over a 100 countries worldwide are affected by the outbreak, with some regions being more
                severely impacted than others. An updated list by WHO can be found <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports" target="_blank" rel="noopener noreferrer">here.</a></p>}/>

            <Item question = {"Is it safe to travel within India?"} 
                answer = {<p>The government authorities have proactively put appropriate checks and
                guidelines in place, especially at airports and points of entry to prevent further spread of the disease.
                Several advisories have been issued for the welfare of citizens, and healthcare facilities have been stepped
                up to contain the spread of infection. If you are planning to travel over the next few days or weeks, please
                go through the detailed safety guidelines by WHO <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice" target="_blank" rel="noopener noreferrer">here</a>, and take all suggested measures to
                safeguard yourself against infection. Precaution will help, panic won’t.</p>}/>

            <Item question = {"What are the general tips I should follow while travelling?"} 
                  answer = {<div><p className="info_txt append_bottom20">While COVID-19 is contagious, you can protect yourself and your loved ones
                  from infection while travelling by following this basic tips:
                </p>
      
                    
                <ul className="list_info append_bottom16">
                  <li>Maintain good respiratory hygiene and avoid touching your mouth, nose and eyes.</li>
                  <li>Wash your hands frequently with soap, or use an alcohol-based hand-sanitizer.</li>
                  <li> Keep a distance of at least 3 feet from anyone who shows signs of cold, cough or fever.</li>
                  <li> If you feel unwell, stay indoors and avoid travelling.</li>
                  <li> Always cover your mouth with a cloth or the insides of your elbows while coughing or sneezing.</li>
                  <li> If you develop respiratory symptoms, seek medical help immediately without delay.</li>
                  <li>Avoid consuming raw or undercooked meat and eggs.</li>
                </ul>
                
                <p className="info_txt">For more details and updates, please refer to the official <a
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                    target="_blank" rel="noopener noreferrer">WHO guidelines.</a>
                </p>
                </div>} />
        </div>
    )
}

export default Other;