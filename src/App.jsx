import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';


function App() {
    return (
        <div>
            <Navbar />
            <Section emberCim="valami cim" miCim="valami cim" emberImgSrc='' miImgSrc='' miText='valami mi text' emberText='valami ember text'></Section>
            <Footer />
        </div>
    );
}

export default App;