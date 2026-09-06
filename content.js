/**
 * ====================================================================
 * DATA WEBU — TATRY POMAHAJU DETOM 2026
 * ====================================================================
 * Tento subor obsahuje vsetky texty, informacie o trase, profil,
 * transparentny ucet a zapisky z dennika.
 * Jazyk: Slovencina (Slovak)
 */

window.SITE_DATA = {
  meta: {
    siteTitle: "Tatry pomáhajú deťom 2026 — Radoslav Hyža",
    projectName: "Tatry pomáhajú deťom 2026",
    slogan: "Každý krok pomáha. Spoločne pre deti.",
    motto: "Pre úsmev. Pre nádej. Pre deti.",
    authorName: "Radoslav Hyža",
    authorSubtitle: "Trekker, bežec & iniciátor charitatívneho projektu",
    authorBio: "Po 2 rokoch nastal opäť moment vybrať sa na trek po Slovensku s pomocou pre deti. Po úspešnej Ceste SNP 2024, na ktorej sa vďaka super ľuďom vyzbieralo 12 500 €, som sa rozhodol uskutočniť akciu Tatry pomáhajú deťom 2026.",
    phone: "0905 472 734",
    email: "radoslavhyza@gmail.com",
    facebookUrl: "https://www.facebook.com/radoslav.hyza/",
    instagramUrl: "https://www.instagram.com/radoslavhyza/",
    ludialudomUrl: "https://ludialudom.sk/vyzvy/neschvalena/18505",
    transparentAccountUrl: "https://www.transparentneucty.sk/#/ucet/SK2209000000005221139164"
  },

  trekStats: {
    distance: "220 km",
    elevation: "18 400 m",
    startDate: "Pondelok 7. 9. 2026",
    duration: "8 – 10 dní",
    startPoint: "Ždiar",
    endPoint: "Zuberec",
    difficulty: "4× ťažšie ako Cesta SNP (priemer 16% stúpanie)",
    direction: "Z východu na západ"
  },

  fundraiser: {
    showFundraiser: true,
    title: "Transparentná zbierka pre deti",
    description: "Všetky finančné dary putujú na pomoc ZŤP a inou formou znevýhodneným deťom. Pomoc bude rozdelená pre 3 konkrétne deti s rodinami a 3 organizácie starajúce sa o deti.",
    targetAmount: 15000,
    collectedAmount: 12500,
    currency: "€",
    historyNote: "Minulý ročník (Cesta SNP 2024): vďaka vám sa vyzbieralo neuveriteľných 12 500 €!",
    iban: "SK22 0900 0000 0052 2113 9164"
  },

  requisites: {
    title: "Ako môžete pomôcť a prispieť?",
    subtitle: "Podporte našu iniciatívu ľubovoľnou sumou. Každé euro pomôže vyčariť úsmev na tvárach detí.",
    iban: "SK22 0900 0000 0052 2113 9164",
    cards: [
      {
        type: "transparent",
        title: "Transparentný účet (Slovenská sporiteľňa)",
        iconType: "bank",
        iban: "SK22 0900 0000 0052 2113 9164",
        bank: "Slovenská sporiteľňa",
        note: "Pohyby a stav účtu sú verejne dostupné",
        linkText: "Pozrieť transparentný účet online ↗",
        linkUrl: "https://www.transparentneucty.sk/#/ucet/SK2209000000005221139164"
      },
      {
        type: "portal",
        title: "Darcovský portál ĽudiaĽuďom / Donio",
        iconType: "heart",
        desc: "Možnosť prispieť pohodlne kartou cez platobnú bránu.",
        linkText: "Prejsť na zbierku ĽudiaĽuďom ↗",
        linkUrl: "https://ludialudom.sk/vyzvy/neschvalena/18505"
      },
      {
        type: "share",
        title: "Zdieľanie a propagácia",
        iconType: "share",
        desc: "Ak nemôžete prispieť finančne, obrovskou pomocou je zdieľanie akcie na sociálnych sieťach medzi priateľov a známych!",
        shareText: "Zdieľať projekt"
      }
    ]
  },

  aboutProject: {
    title: "O projekte a komu pomáhame",
    sections: [
      {
        iconType: "child",
        title: "Pomoc pre deti",
        text: "Opäť budeme pomáhať ZŤP a inou formou znevýhodneným deťom. Kým pred 2 rokmi sme podporili konkrétne deti, teraz to bude kombinovaná pomoc pre konkrétne 3 deti s rodinami a 3 organizácie, ktoré sa starajú o deti – to prinesie pomoc pre ešte viac detí."
      },
      {
        iconType: "mountain",
        title: "Extrémna trasa cez 2-tisícovky",
        text: "Trasa vedie zo Ždiaru do Zuberca cez všetky turisticky dostupné 2-tisícovky a horské chaty vo Vysokých a Západných Tatrách na slovenskej strane: Jahňací štít, Slavkovský štít, Rysy, Východná Vysoká, Ostrý Roháč, Baníkov, Priečne sedlo, Sedielko a mnohé iné."
      },
      {
        iconType: "elevation",
        title: "Profil a náročnosť",
        text: "Na 220 km je celkové prevýšenie 18 400 m, čo je v priemere 84 výškových metrov na každý kilometer (cca 16% stúpanie). Je to 4-násobne náročnejšie ako legendárna Cesta hrdinov SNP. Na celej trase bude minimum oddychových pasáží."
      },
      {
        iconType: "shield",
        title: "Riziká a pokora",
        text: "Najväčším rizikom bude počasie – potrebných je 8 až 10 priaznivých dní. Idem na túto trasu s veľkou pokorou k tatranskej prírode. Hlavným cieľom je spoločne pomôcť deťom, ktoré to skutočne potrebujú."
      }
    ]
  },

  route: {
    initialCenter: [49.20, 19.95],
    initialZoom: 10,
    points: [
      {
        id: "day-1",
        title: "Štart: Ždiar",
        coords: [49.271, 20.266],
        status: "start",
        note: "Štart v pondelok 7. 9. 2026"
      },
      {
        id: "day-2",
        title: "Chata pri Zelenom plese & Jahňací štít (2 230 m)",
        coords: [49.215, 20.224],
        status: "planned"
      },
      {
        id: "day-3",
        title: "Téryho chata & Sedielko (2 376 m)",
        coords: [49.191, 20.200],
        status: "planned"
      },
      {
        id: "day-4",
        title: "Priečne sedlo (2 352 m) & Slavkovský štít (2 452 m)",
        coords: [49.176, 20.168],
        status: "planned"
      },
      {
        id: "day-5",
        title: "Rysy (2 501 m) & Chata pod Rysmi",
        coords: [49.179, 20.088],
        status: "planned"
      },
      {
        id: "day-6",
        title: "Kriváň (2 495 m) & Podbanské",
        coords: [49.141, 19.902],
        status: "planned"
      },
      {
        id: "day-7",
        title: "Ostrý Roháč (2 088 m)",
        coords: [49.202, 19.757],
        status: "planned"
      },
      {
        id: "day-8",
        title: "Baníkov (2 178 m) & Žiarske sedlo",
        coords: [49.198, 19.710],
        status: "planned"
      },
      {
        id: "day-final",
        title: "Cieľ: Zuberec",
        coords: [49.258, 19.614],
        status: "target",
        note: "Záverečná etapa a úspešný návrat"
      }
    ]
  },

  // Zoznam dní denníka: Deň 1 je najnovší testovací záznam, Úvod je predštartový príspevok
  diary: [
    {
      id: "day-1",
      dayNumber: 1,
      date: "7. september 2026",
      location: "Ždiar ➔ Chata pri Zelenom plese",
      title: "Štart expedície a stúpanie k Zelenému plesu",
      text: `Ráno o 7:00 sme úspešne odštartovali zo Ždiaru. Počasie zatiaľ drží, hoci ranný vzduch v Belianskych Tatrách bol poriadne mrazivý.

Prvý úsek dolinou dal nohám zabrať, no výhľady na monumentálnu stenu Malého Kežmarského štítu sú neopísateľné. Na Chate pri Zelenom plese dávame krátky oddych, teplý horský čaj a zajtra skoro ráno pokračujeme smerom na Jahňací štít.

Každý kilometer dnes bolel, no vedomie, že týmto pomáhame deťom, dáva obrovskú silu pokračovať!`,
      photos: [
        {
          url: "assets/photos/lake-mountain.svg",
          caption: "Zelené pleso a stena Malého Kežmarského štítu"
        },
        {
          url: "assets/photos/trail-rock.svg",
          caption: "Kamenistý chodník Dolinou Bielej vody"
        }
      ],
      initialLikes: 94
    },
    {
      id: "entry-intro",
      dayNumber: 0,
      date: "Prípravy na štart",
      location: "Ždiar — Zuberec",
      title: "Prečo práve Tatry a pomoc deťom?",
      text: `Pred dvoma rokmi sa na Ceste SNP podaril malý zázrak — vyzbierali sme 12 500 € na pomoc deťom. Tento rok idem do Tatier.

220 kilometrov, 18 400 výškových metrov a každý jeden krok s myšlienkou na deti, ktoré každodenne zvádzajú oveľa ťažšie boje než je výstup na tatranské štíty. V pondelok 7. septembra 2026 vyrážam zo Ždiaru.

Každý deň tu budem pridávať krátky prehľad, fotky z hrebeňov a aktuálnu polohu. Ďakujem všetkým, ktorí stojíte pri mne a deťoch!`,
      photos: [
        {
          url: "assets/img/poster.jpg",
          caption: "Oficiálny plagát a výškový profil trasy (220 km • 18 400 m)"
        },
        {
          url: "assets/photos/tatry-stity.svg",
          caption: "Tatranské štíty — náročný hrebeňový prechod cez 2-tisícovky"
        }
      ],
      initialLikes: 186
    }
  ]
};
