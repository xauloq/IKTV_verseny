import './App.css';
import NavbarMain from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import { text } from './data.js'

function App() {
        return (
            <div>
                    <NavbarMain />
                    <Section {...text[0]} ></Section>
                    <Section {...text[1]} ></Section>
                    <Section {...text[2]} ></Section>
                    <Section {...text[3]} ></Section>
                    <Section {...text[4]} ></Section>
                    <Section {...text[5]} ></Section>
                    <Footer />
            </div>
        );
}

export default App;