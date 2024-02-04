// Valetietokanta

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // valetietokanta josta tulee sisältö ravintoloille
    const restaurants: Restaurant[] = [
      {
        id: 1,
        name: 'MakuMestari Grilli & Baari',
        photo: './assets/burgers.jpg',
        menu: [
          {
            annos: 'Tulen Taikuri Tomaattipihvit',
            hinta: 21,
            kuvaus:
              'Mehevät naudanlihapihvit, joissa on aavistus tulista chilimaustetta ja täyteläistä tomaattikastiketta.',
          },
          {
            annos: 'Grilliherkku Häränhäntä',
            hinta: 22,
            kuvaus:
              'Grillatut kanakabobit, jotka on marinoidtu savuisella mausteseoksella ja hunajalla. ',
          },
          {
            annos: 'Marmorin Maku Naudanpihvit',
            hinta: 23,
            kuvaus:
              'Herkullisia naudanlihapihvejä joiden lisänä kermaperunoita ja kasviksia',
          },
        ],
      },
      {
        id: 2,
        name: 'TaikuriTaco Ravintola',
        photo: './assets/tortilla.jpg',
        menu: [
          {
            annos: 'Taco Tornado',
            hinta: 21,
            kuvaus:
              'Maistuva tornado mausteisia tacoja, jotka pyörteilevät makumaailmassa ja vievät sinut mausteiden pyörteisiin.',
          },
          {
            annos: 'MexiMuncher Annos',
            hinta: 22,
            kuvaus:
              'Rouskuvaa herkkua, joka on täynnä meksikolaista makua ja iloa joka puraisulla.',
          },
          {
            annos: 'SalsaSurprise Taco',
            hinta: 23,
            kuvaus:
              'Yllätyksellinen kombinaatio tulista salsaa ja raikasta täytettä, joka saa makunystyräsi tanssimaan.',
          },
        ],
      },
      {
        id: 3,
        name: 'Salaattisinfonia Bistro',
        photo: './assets/salad.jpg',
        menu: [
          {
            annos: 'Tropical Tango Salad',
            hinta: 21,
            kuvaus:
              'Trooppinen sekoitus herkullisia makuja, kuten mangoa, ananasta ja grillattua kanaa, jotka tanssivat yhdessä tuoden esiin raikkaan ja eksoottisen salaattikokemuksen.',
          },
          {
            annos: 'Zen Zest Bowl',
            hinta: 22,
            kuvaus:
              'Tasapainoinen annos, joka täynnä raikkaita vihanneksia, kuten kurkku, avokado ja edamame-pavut, jotka tarjoavat rauhoittavan ja herkullisen makuelämyksen.',
          },
          {
            annos: 'Tropical Tango Salad',
            hinta: 23,
            kuvaus:
              'Trooppinen sekoitus herkullisia makuja, kuten mangoa, ananasta ja grillattua kanaa, jotka tanssivat yhdessä tuoden esiin raikkaan ja eksoottisen salaattikokemuksen.',
          },
        ],
      },
      {
        id: 4,
        name: 'Herkkuhetki Deli',
        photo: './assets/deli.jpg',
        menu: [
          {
            annos: 'Tulen Taikuri Tomaattipihvit',
            hinta: 21,
            kuvaus:
              'Mehevät naudanlihapihvit, joissa on aavistus tulista chilimaustetta ja täyteläistä tomaattikastiketta.',
          },
          {
            annos: 'Grilliherkku Häränhäntä',
            hinta: 22,
            kuvaus:
              'Grillatut kanakabobit, jotka on marinoidtu savuisella mausteseoksella ja hunajalla. ',
          },
          {
            annos: 'Marmorin Maku Naudanpihvit',
            hinta: 23,
            kuvaus:
              'Herkullisia naudanlihapihvejä joiden lisänä kermaperunoita ja kasviksia',
          },
        ],
      },
      {
        id: 5,
        name: 'SuklaaUnelma Kahvila',
        photo: './assets/coffee.jpg',
        menu: [
          {
            annos: 'Suklaaunelma-torttu',
            hinta: 21,
            kuvaus:
              'Pehmeä suklaakakkupohja, joka on täytetty herkullisella suklaamousseella ja päällystetty runsaalla suklaakuorrutteella.',
          },
          {
            annos: 'Suklaa-karamellibrownie',
            hinta: 22,
            kuvaus:
              'Täyteläinen suklaabrownie, joka on höystetty herkullisella karamellilla ja ripauksella suolaa.',
          },
          {
            annos: 'Suklaa-pistaasitartaletti',
            hinta: 23,
            kuvaus:
              'Rapea pistaasitäytteinen taikinakuori, joka on täytetty pehmeällä suklaamousseella ja koristeltu paahdetuilla pistaasipaloilla.',
          },
        ],
      },
      {
        id: 6,
        name: 'Kupliva Kattila Pizzeria',
        photo: './assets/pizza.jpg',
        menu: [
          {
            annos: 'Mediterranean Magic Pizza',
            hinta: 21,
            kuvaus:
              'Tämä pizza tarjoilee Välimeren alueen parhaat maut suoraan uunista. Rapea pohja on täytetty mehevällä tomaattikastikkeella ja runsaalla mozzarellajuustolla. Päälle on ripoteltu aurinkokuivattuja tomaatteja, oliiveja, tuoretta basilikaa ja fetajuustoa, jotka tuovat esiin Välimeren auringon lämmön jokaisella puraisulla.',
          },
          {
            annos: 'Smokey BBQ Chicken Pizza',
            hinta: 22,
            kuvaus:
              'Tämä herkullinen pizza tarjoilee savuisen BBQ-kastikkeen, mehukkaan grillatun kanan, raikkaan punasipulin ja tuoreen korianterin täydellisen yhdistelmän. Päälle ripoteltu cheddarjuusto ja mausteinen chipotle-majoneesi tuovat esiin tämän pizzan rohkean ja maistuvan maun.',
          },
          {
            annos: 'Farmers Harvest Pizza',
            hinta: 23,
            kuvaus:
              'Tämä pizza juhlii maalaistalon tuoreita makuja suoraan pellolta lautasellesi. Pohja on peitetty herkullisella tomaattikastikkeella ja täytetty värikkäillä vihanneksilla kuten paprikoilla, sienillä, sipulilla ja tuoreella pinaatilla. Päälle ripoteltu mozzarellajuusto sulaa täydellisesti, viimeistellen tämän maalaistunnelman.',
          },
        ],
      },
    ];
    return { restaurants };
  }
}
