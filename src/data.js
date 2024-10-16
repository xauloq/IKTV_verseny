import aiFelism from './assets/AIalmaFelismero.png';
import EmberAlmaFelism from './assets/EmberAlmaFelismero.png';
import aiSzuret from './assets/aiSzuret.png';
import emberSzuret from './assets/emberSzuret.png';
import almaLogEmb from './assets/almaLogEmb.png';
import almaLogAI from './assets/almaLogAI.png';
import koltsegEmb from './assets/koltsegEmb.png';
import koltsegAI from './assets/koltsegAI.png';
import adaptacioEmb from './assets/adaptacioEmb.png';
import adaptacioAI from './assets/adaptacioAI.png';

export const text = [
  {
    key: 'termes-felismerese',
    secCim: 'Termés felismerése és osztályozása',
    emberImgSrc: EmberAlmaFelism,
    miImgSrc: aiFelism,
    miText: 'A mesterséges intelligencia szenzorokat és gépi látást használ az almák érettségének, méretének, és színének automatikus felismerésére és osztályozására. Az AI pontosabb és gyorsabb adatfeldolgozást biztosít, csökkentve a hibákat és a terményveszteséget.',
    emberText: 'Az emberek vizuális megfigyelésre és tapintásra hagyatkoznak, amikor az alma érettségét vagy betegségét állapítják meg. Az emberi munka tapasztalatra és intuícióra épül, de hajlamosabb a szubjektív hibákra.'
  },

  {
    key: 'szuretelés',
    secCim: 'Szüretelés folyamata',
    emberImgSrc: emberSzuret,
    miImgSrc: aiSzuret,
    miText: 'A mesterséges intelligenciával vezérelt gépek képesek automatikusan szüretelni a termést, a legjobb érettségi szint alapján. Az AI rendszerek optimalizált mozgásokat használnak, minimalizálva a termény sérülését.',
    emberText: 'Az emberek kézzel végzik a szüretet, figyelve az egyes almákra. Bár az emberi kéz finomabb lehet, a munka lassabb és fáradságosabb, és nagyobb a valószínűsége a hibának vagy a sérülésnek.'
  },

  {
    key: 'logisztika',
    secCim: 'Logisztika és raktározás',
    emberImgSrc: almaLogEmb,
    miImgSrc: almaLogAI,
    miText: 'Az AI rendszerek képesek automatikusan tervezni és optimalizálni a logisztikát, beleértve a szállítási útvonalakat és a raktározást is. Az AI minimalizálja a veszteségeket a gyors döntéshozatallal és a tárolási erőforrások hatékony felhasználásával.',
    emberText: 'Az emberek manuálisan osztályozzák és csomagolják az almákat a szüret után. A logisztikai döntések gyakran tapasztalatokon és helyzetfelismerésen alapulnak, de kevésbé optimalizáltak, mint a gépi rendszerek által végzett folyamatok.'
  },

  {
    key: 'koltsegek',
    secCim: 'Költségek és hatékonyság',
    emberImgSrc: koltsegEmb,
    miImgSrc: koltsegAI,
    miText: 'A mesterséges intelligenciával működő rendszerek kezdeti költsége magas lehet, de hosszú távon költséghatékonyak, mivel minimalizálják a munkaerőigényt és növelik a termelési hatékonyságot. Az ismétlődő feladatokat gyorsabban és hibátlanul végzik el.',
    emberText: 'Az emberi munkaerő drágább lehet a bérek és juttatások miatt, de az emberi dolgozók képesek kreatív problémamegoldásra és adaptív gondolkodásra. A tapasztalat és az emberi figyelem fontos tényező a hibák elkerülésében.'
  },

  {
    key: 'adaptacio',
    secCim: 'Adaptáció és problémamegoldás',
    emberImgSrc: adaptacioEmb,
    miImgSrc: adaptacioAI,
    miText: 'Az AI gyorsan felismerhet mintákat a begyűjtött adatokból, és javaslatokat tehet optimalizációra. Azonban az új kihívásokhoz való alkalmazkodás, például időjárási változások vagy gépi meghibásodások kezelése, még fejlesztést igényel.',
    emberText: 'Az emberek rugalmasan tudnak reagálni váratlan helyzetekre, mint például az időjárás változásaira vagy technikai hibákra. Kreatív megoldásokat alkalmaznak, és képesek azonnali döntéseket hozni komplex helyzetekben.'
  },

  {
    key: 'etikai-kerdesek',
    secCim: 'Etikai kérdések és jövőbeli kilátások',
    emberImgSrc: '',
    miImgSrc: '',
    miText: 'Az AI alapú automatizáció növeli a termelékenységet és a hatékonyságot az agrárszektorban, de kérdéseket vet fel a munkahelyek jövőjével kapcsolatban. Az alacsony képzettségű munkahelyek fokozatosan megszűnhetnek, új készségeket igényelve a munkavállalóktól.',
    emberText: 'Az emberek szerepe változhat az AI térnyerésével, különösen az alacsony képzettségű munkavállalók esetében. Bár a technológia növeli a hatékonyságot, a társadalmi és gazdasági hatásokat még nem látjuk teljesen.'
  }
];