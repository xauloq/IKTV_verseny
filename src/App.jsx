import './App.css';
import NavbarMain from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Intro from './components/Intro';
import { text } from './data.js'


function App() {
    return (
        <div>
            <NavbarMain/>
            <h1 id="fooldal"></h1>

            <Intro></Intro>

            <h1 id="termesfelism"></h1>
            <Section {...text[0]}></Section>

            <h1 id="szureteles"></h1>
            <Section {...text[1]}></Section>

            <h1 id="logisztika"></h1>
            <Section {...text[2]}></Section>

            <h1 id="koltsegek"></h1>
            <Section {...text[3]}></Section>

            <h1 id="adaptacio"></h1>
            <Section {...text[4]}></Section>

            <h1 id="etikaikerdesek"></h1>
            <Section {...text[5]}></Section>

            <Footer/>
        </div>
    );
}

export default App;