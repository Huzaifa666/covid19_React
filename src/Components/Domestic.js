import { ListGroup, ListGroupItem } from 'reactstrap';
import React, { Component } from 'react'
import Air from '../Components/Flights/AirAsia'
import AirI from '../Components/Flights/AirIndia'
import AirE from '../Components/Flights/AirE'
import AirA from '../Components/Flights/AirAstana'
import Go from '../Components/Flights/GoAir'

class Domestic extends Component {

    constructor(){
        super();
        this.state = {
            AirAsia: false,
            AirIndia: false,
            AirIndiaExpress: false,
            AirAstana: false,
            GoAir: false,
            IndiGo: false,
            SpiceJet: false,
            StarAir: false,
            TruJet: false,
            Vistara: false
        }
    }

    hideComponent(name){
        switch(name){
            case "AirAsia": 
                this.setState({ AirAsia: !this.state.AirAsia });
                break;

            case "AirIndia":
                this.setState({ AirIndia: !this.state.AirIndia });
                break;
            
            case "AirExpress":
                this.setState({ AirIndiaExpress: !this.state.AirIndiaExpress });
                break;
            
            case "AirA":
                this.setState({ AirAstana: !this.state.AirAstana });
                break;

            case "GoAir":
                this.setState({ GoAir: !this.state.GoAir });
                break;

            default: console.log(name)
        }
    }

render(){
    const { AirAsia, AirIndia, AirIndiaExpress, AirAstana,
        GoAir} = this.state;
    return (
            <div>
            <ListGroup>
                <ListGroupItem tag="button" action onClick={() => this.hideComponent("AirAsia")}><strong>AirAsia</strong>
                     {AirAsia && <Air />}
                </ListGroupItem>

                <ListGroupItem tag="button" action onClick={() => this.hideComponent("AirIndia")}><strong>Air India</strong>
                     {AirIndia && <AirI />}
                </ListGroupItem>

                <ListGroupItem tag="button" action onClick={() => this.hideComponent("AirExpress")}><strong>Air India Express</strong>
                     {AirIndiaExpress && <AirE />}
                </ListGroupItem>

                <ListGroupItem tag="button" action onClick={() => this.hideComponent("AirA")}><strong>Air Astana</strong>
                    {AirAstana && <AirA />}
                </ListGroupItem>

                <ListGroupItem tag="button" action onClick={() => this.hideComponent("GoAir")}><strong>GoAir</strong>
                    {GoAir && <Go />}
                </ListGroupItem>

                <ListGroupItem tag="button" action><strong>IndiGo</strong></ListGroupItem>

                <ListGroupItem tag="button" action><strong>SpiceJet</strong></ListGroupItem>

                <ListGroupItem tag="button" action><strong>Star Air</strong></ListGroupItem>

                <ListGroupItem tag="button" action><strong>TruJet</strong></ListGroupItem>

                <ListGroupItem tag="button" action><strong>Vistara</strong></ListGroupItem>
            </ListGroup>
            </div> 
    );

}
}

export default Domestic;