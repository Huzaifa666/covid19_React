import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Header from './Components/header'
import 'bootstrap/dist/css/bootstrap.min.css';  
import Faq from './Components/faqs'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from './Components/Container'
import Hotel from './Components/Hotels'
import Holiday from './Components/Holiday'
import Support from './Components/Support'
import Other from './Components/Other'
import Links from './Components/Links'
import Flight from './Components/flights'
import Founders from './Components/founders'
const App = () => {
    return(
        <div>
        <div id = "blank1"></div>
            <Container>
                <Header />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Founders />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Flight />
            </Container>
        
        <div id = "blank1"></div>
        
            <Container>
                <Faq />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Hotel />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Holiday />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Support />
            </Container>

        <div id = "blank1"></div>

            <Container>
                <Other />
            </Container>
        
        <div id = "blank1"></div>

            <Container>
                <Links />
            </Container>

         <div id = "blank1"></div>
        </div>        
    )
}

ReactDOM.render(<App />, 
    document.querySelector('#root'))