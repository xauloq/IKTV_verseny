import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import aiFelism from './assets/AIalmaFelismero.png';
import EmberAlmaFelism from './assets/EmberAlmaFelismero.png';
import aiSzuret from './assets/aiSzuret.png';
import emberSzuret from './assets/emberSzuret.png';

function App() {
        return (
            <div>
                    <Navbar />
                    <Section key='termés-felismerése' secCim='Termés felismerése és osztályozása'
                             emberImgSrc={EmberAlmaFelism}
                             miImgSrc={aiFelism}
                             miText='A mesterséges intelligencia szenzorokat és gépi látást használ az almák érettségének, méretének, színének automatikus felismerésére és osztályozására. Az AI nagyobb hatékonysággal képes az adatok feldolgozására, csökkentve a hibák arányát.'
                             emberText='Az emberek vizuálisan és tapintás alapján azonnal meg tudják állapítani, hogy az alma érett-e, túléréssel fenyeget, vagy beteg.'
                    ></Section>

                    <Section key='szüretelés' secCim='Szüretelés'
                             emberImgSrc={emberSzuret}
                             miImgSrc={aiSzuret}
                             miText='Robotizált rendszerek AI-val vezérelve képesek mechanikusan szedni az almákat, optimalizálva az időt, és folyamatosan dolgozva akár éjjel-nappal. Az újabb rendszerek a gyümölcs állapotát is figyelik szedés közben, de még van kihívás a gyümölcssérülés minimalizálásában.'
                             emberText='Az emberek kézi erővel végzik az almák leszedését, ami időigényes, de gondos munkavégzést tesz lehetővé, minimalizálva a gyümölcs sérülését.'
                    ></Section>

                    <Section key='logisztika' secCim='Logisztika és raktározás'
                             emberImgSrc=''
                             miImgSrc=''
                             miText='Az AI azonnal megszervezheti az almák elosztását, optimalizálva a szállítást, az erőforrások kihasználását és a raktározási kapacitást, minimalizálva a veszteséget.'
                             emberText='Az emberek a szüret után manuálisan szortírozzák és csomagolják az almákat, figyelve a minőségi előírásokra. A raktározásra és elosztásra szintén emberek figyelnek.'
                    ></Section>

                    <Section key='költségek' secCim='Költségek és hatékonyság'
                             emberImgSrc=''
                             miImgSrc=''
                             miText='AI-alapú rendszerek hosszú távon költséghatékonyak lehetnek, mivel egyszer beállítva minimális emberi beavatkozással folytathatják a munkát, csökkentve az ismétlődő feladatokhoz szükséges időt.'
                             emberText='Az emberi munkaerő költsége magasabb lehet a fizetések és a munkavállalói juttatások miatt, de a tapasztalat és a figyelem fontos tényező.'
                    ></Section>

                    <Section key='adaptáció' secCim='Adaptáció és problémamegoldás'
                             emberImgSrc=''
                             miImgSrc=''
                             miText='Az AI a begyűjtött adatok alapján gyorsan azonosíthat problémákat és javasolhat optimalizációkat, de az új kihívásokhoz való alkalmazkodás még fejlesztés alatt áll.'
                             emberText='Az emberek gyorsan reagálhatnak váratlan helyzetekre, például időjárási változásokra vagy géphibákra, és kreatív megoldásokat kínálhatnak.'
                    ></Section>

                    <Section key='etikai-kérdések' secCim='Etikai kérdések és jövőbeli kilátások'
                             emberImgSrc=''
                             miImgSrc=''
                             miText='Az AI növelheti a termelékenységet és az élelmiszer-ellátás hatékonyságát, de a társadalmi és gazdasági hatásait még nem látjuk teljesen. Az automatizáció megváltoztathatja a munkaerőpiacot, új képességeket követelve.'
                             emberText='Az emberek helyettesítése robotokkal és AI-val felveti a munkanélküliség kérdését az agrárszektorban, különösen az alacsony képzettségű munkavállalók esetében.'
                    ></Section>

                    <Footer />
            </div>
        );
}

export default App;