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
    ludialudomUrl: "https://www.ludialudom.sk/vyzvy/18505",
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
        linkUrl: "https://www.ludialudom.sk/vyzvy/18505"
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

  media: {
    tag: "Dôveryhodnosť & Médiá",
    title: "Napísali o projekte",
    subtitle: "Rozhovory a reportáže v slovenských médiách o charitatívnej výzve",
    articles: [
      {
        publisher: "Denník SME (MY Trenčín)",
        badge: "Rozhovor",
        title: "18 kilometrov stúpania za desať dní: Myjavčan sa chystá na extrémnu výzvu, chce pomôcť deťom",
        quote: "„Nie je dôležité koľko kopcov vyjdem, ale ako pomôžem deťom, ktoré naozaj tú pomoc potrebujú.“",
        url: "https://my.sme.sk/trencin/c/18-kilometrov-stupania-za-desat-dni-myjavcan-sa-chysta-na-extremnu-vyzvu-chce-pomoct-detom",
        ctaText: "Čítať rozhovor na SME.sk"
      },
      {
        publisher: "Trenčínak.sk",
        badge: "Reportáž",
        title: "Zdolá 220 kilometrov cez Tatry a 18-tisíc výškových metrov. Myjavčan chce výzvou pomôcť deťom",
        quote: "„Celkovo nastúpa 18 400 výškových metrov a navštívi všetky dostupné tatranské dvojtisícovky s cieľom vyzbierať financie pre rodiny so znevýhodnenými deťmi.“",
        url: "https://www.trencinak.sk/clanky/13629/foto-zdola-220-kilometrov-cez-tatry-a-18-tisic-vyskovych-metrov-myjavcan-chce-vyzvou-pomoct-znevyhodnenym-detom",
        ctaText: "Čítať článok na Trenčínak.sk"
      },
      {
        publisher: "SITA.sk",
        badge: "Tlačová správa",
        title: "Tatry pomáhajú deťom 2026: Radoslav zdolá 220 kilometrov, aby pomohol deťom so zdravotným znevýhodnením",
        quote: "„Idem na túto trasu s pokorou. Možno sa mi ju ani nepodarí dokončiť. Netreba si dávať veľké ciele. Dôležité je, že sa pokúsim urobiť maximum a zároveň pomôcť deťom.“",
        url: "https://sita.sk/tatry-pomahaju-detom-2026-radoslav-zdola-220-kilometrov-aby-pomohol-detom-so-zdravotnym-znevyhodnenim/",
        ctaText: "Čítať správu na SITA.sk"
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

  // Zoznam dní denníka: Deň 0 je aktuálny živý záznam zo štartu, Úvod je predštartový príspevok
  diary: [
        {
            "id": "day-1",
            "dayNumber": 1,
            "date": "7. septembra 2026",
            "location": "Ždiar ➔ Vyšné Kopské sedlo ➔ Chata pri Zelenom plese ➔ Jahňací štít ➔ Chata pri Zelenom plese",
            "title": "Deň 1: Zo Ždiaru cez Vyšné Kopské sedlo a Jahňací štít na Chatu pri Zelenom plese",
            "text": "TATRY POMÁHAJÚ DEŤOM 2026 🏔👊\n\n Deň 1: Ždiar 890 m - Vyšné Kopské sedlo 1933 m  - Chata pri Zelenom plese 1550 m- Jahňací štít 2229 m (na ľahko) - Chata pri Zelenom plese 1550 m (nocľah): 18 km, 2040 m hore, 1370 m dole.\n\n Noc bola taká ako v novom priestore, spánok taký poslabší. Ale nevadí, rátal som s tým. Po dobrých raňajkách som šiel naproti za Jožkom Kubánim. Asi 8:45 sme začali šliapať. Šlo sa výborne, počasie nádherné, bolo teplo a tie výhľady na Belianske Tatry 😊❤️... Jožko šiel takmer 2 hodiny so mnou, takže materiálu na reportáž mal hodne 🙂 Zajtra by mala byť. \n\n Začali sme stúpať novou trasou na Veľký Grúň. Časť Monkovej doliny je uzavretá. Stupák to bol výživný, velice 😀 Nezávidel som Jožkovi ešte hovoriť a riešiť report. Ale tie pohľady boli fakt božské. Potom som už stúpal sám, samozrejme to čo sa vyšlo hore, sa potom šlo časť aj dole 😀 Aby mi nebolo ľúto. \n\n Po chvíli som stretol staršieho pána a svojou otázkou na mňa mi vyrazil dych: \"Pane vy ste vedec? Lebo vyzeráte ako vedec\" Skoro ma prekotilo 😀 Reku pane, ja som obyčajný človek a teraz navyše aj smrdím 😀\n\n Kým som vyšiel do Vyšného Kopského sedla mal som čo robiť. Záhul jak sviňa. Ale otvorili sa mi nádherné výhľady na Východnú časť Vysokých Tatier. Jahňací štít sa na mňa žgeril a počul som ako mi hovorí: \"Kámo ak chceš dnes vyjsť sem tak kopni do vrtule.\" No jo, tvé přání je mým rozkazem 😀 \n\n Tak som kopol do vrtule. Pri Veľkom Bielom plese som takmer zle odbočil. Už len to by mi chýbalo. Posledných 10 minút k chate bolo za trest. Nemám rád keď sa musím zohínať, batoh sa mi zachytáva o kosodrevinu. Hneď ako som došiel k Brnčálke som sa ubytoval a odložil veci 🏃‍♂️\n\n Zobral som len fľašu vody, tyčinku, čelovku, mikinu a bundu a hybaj na Jahňací štít o 15:30. Reku možno o 19hod som dole akurát na večeru. Polku trasy som vybehol za 45 minút. Reku fajné, dole bola cedula že hore to je 2:30. Ale od Kolového sedla sa to zbrzdilo. Je tam taký terén skalný hore dole, v podstate všetky 4 končatiny treba používať.  Tam mi to trvalo ale po 2 hodinách som bol hore. Samozrejme výhľady a hlavne na Belianske Tatry ktoré som šiel počas dňa 😊\n\n Cestou dole som stretol kamzíka. Približoval sa ku mne na 5 metrov 🙂 Dával som si veľký pozor pri zostupe. Celkovo po 4 hodinách som bol naspäť na Chate a rovno šiel na večeru. \n\n Musím veľmi pochváliť super personál Chaty pri Zelenom plese. Boli mi veľmi nápomocný. Chlapy ďakujem veľmi pekne za všetko 😉👍✊️\n\n Dnes to bol na úvod pekný záhul, uvidíme kam sa zajtra dostanem 😀\n Akurát ma tu v bare celkom serú vulgárny napitý Poliaci. Keď by som ich mal mať v izbe...\n Spím v takej prístavbe na matrace v spacáku. Myslím že tu sa vyspím omnoho lepšie ako na poschodovej posteli.\n\n Reportáž v TV JOJ by mala byť zajtra. Zatiaľ si môžte prečítať článok v agentúre SITA 😉\n\n A jasné, môžte ďalej prispievať na detičky. V ich mene vám veľmi pekne ďakujem 😊\n Keď ich človek vidí na živo, tak sa vo vás pohne svedomie. Zdravie je naozaj najvzácnejší dar. Vážme si ho.",
            "photos": [
                {
                    "url": "assets/photos/den1-foto1.jpg",
                    "caption": "Štart 8:45 🙂"
                },
                {
                    "url": "assets/photos/den1-foto2.jpg",
                    "caption": "Schátraný hotel..."
                },
                {
                    "url": "assets/photos/den1-foto3.jpg",
                    "caption": "Deň 1"
                },
                {
                    "url": "assets/photos/den1-foto4.jpg",
                    "caption": "Nádhera Ždiarska vidla a Havran"
                },
                {
                    "url": "assets/photos/den1-foto5.jpg",
                    "caption": "Chodník ide vpravo od žľabu"
                }
            ],
            "facebookUrl": "https://www.facebook.com/radoslav.hyza/posts/10234290326695655",
            "initialLikes": 25
        },
        {
            "id": "day-0",
            "dayNumber": 0,
            "date": "6. septembra 2026",
            "location": "Trnava ➔ Poprad ➔ Ždiar ➔ Belianske Tatry",
            "title": "Deň 0: Presun vlakom a busom cez Poprad do Ždiaru",
            "text": "TATRY POMÁHAJÚ DEŤOM 🏔👊\n\n Deň 0: presun vlakom a busom cez Poprad do Ždiaru. \n Posledný týždeň bol veľmi hektický, príprava bola ťažká, hlavne vybrať správne rodinky s chorými deťmi a organizácie bolo náročné. Do toho rôzne iné veci, napríklad riešenie novej techniky na foto video dokumentáciu a pod. 🙂... V prvom rade by som chcel poďakovať mojej láske Katke, že mi umožnila ísť na túto cestu. Taktiež Radkovi za podporu a aj svojmu zamestnávateľovi ZVJS za poskytnutie voľna 🙂\n\n Možno sa pýtate prečo som nešiel skôr, keď bolo ako tak fajn počasie v Tatrách. Nedalo sa z rodinno pracovných dôvodov. Takto pred 2 rokmi som štartoval Cestu SNP a dnes v podstate Tatry. \n\n Včera som ešte zarezával v robote a dnes ráno sa vrhol na balenie. Všetko som si nachystal a snažil sa ako tak naukladať do batohu 😀 Poznáte to. \n Najviac zabralo miesto páperový spacák. Radšej som zobral teplý, človek nikdy nevie. Samozrejme nechýbajú ani zimné doplnky 🥶\n\n Po obede sme šli na stanicu v Trnave. Samozrejme ako na potvoru sa mi nedal kúpiť lístok na vlak cez mobil 😀 Ale našťastie miláčikovi áno. Reku kúp mi miestenku vagón číslo 9, ten je posledný. Jasné že po príchode Šinkansena sme zistili že to je prvý vagón. Tak šmygaj behom cez celé nástupište dopredku. Ťažko sa mi lúčilo ❤️😢 \n Vo vlaku sa pýtam sprievodcu na pifko, prevelikú chuť som mal. Ale fakt veľkú. Zadrel že reštauračný vagón je na opačnom konci. Win win situácia 😂 No nič, párkrát som preglgol nasucho a potom som sa terigal cez celý vlak. Vôbec ma pri chôdzi nehádzalo, veď naše vlaky chodia akoby levitovali... 😀\n Práskol som si 2 Plzne a zobral ešte 1 plechovku.\n\n Na počudovanie vlak nabral stratu pár minút až v Štrbe. V Poprade som šiel na autobus. Naše verejné priestory, autobusová stanica sú vesmes ultrahyper moderné priestory. Ale tak z Vízie 1974...\n\n Po 22 rokoch som sa ocitol v Ždiari. Pekná dedinka a ešte krajší pohľad na Belianske Tatry. Privítalo ma pár oviec s ktorými som pokecal a pohľad na Kopské sedlo kam idem zajtra. Ubytoval som sa v peknom penzióne Sova za super cenu, 38 eur s raňajkami 🙂\n Na večeru som si dal držkovú polievku do mojej držky a Urpiner 😊\n\n Až cestou som zistil že som si doma zabudol návleky 😀 No čo, už som starý človek. Ale myslím že to poriešim v Smokovci.\n\n Ešte si nachystám veci na izbe na zajtra a pôjdem na to. Čo sa týka trasy. Ideálne je to spraviť za 11 dní. Ale človek mieni a počasie mení. Od štvrtka hlásia všelijaké počasie, takže rátam s prestojmi, zmenou trasy a neviem čo ešte bude. Nevadí, čo už. Pôjdem postupne krok za krokom. \n\n Nie je dôležité koľko kopcov vyjdem, ale ako pomôžem deťom, ktoré naozaj tú pomoc potrebujú 😉🤗🙏\n Môžte už prispievať. V mene všetkých detí, ďakujeme.",
            "photos": [
                {
                    "url": "assets/photos/den0-foto1.jpg",
                    "caption": "Fáza balenia sa"
                },
                {
                    "url": "assets/photos/den0-foto2.jpg",
                    "caption": "Deň 0"
                },
                {
                    "url": "assets/photos/den0-foto3.jpg",
                    "caption": "Ždiar"
                },
                {
                    "url": "assets/photos/den0-foto4.jpg",
                    "caption": "Západ slnka za Beliankami"
                },
                {
                    "url": "assets/photos/den0-foto5.jpg",
                    "caption": "Tam vľavo idem zajtra do Kopského sedla 😀"
                }
            ],
            "facebookUrl": "https://www.facebook.com/radoslav.hyza/posts/10234277948226201",
            "initialLikes": 25
        },
        {
            "id": "entry-intro",
            "dayNumber": "Úvod",
            "date": "Pred štartom",
            "location": "Ždiar — Zuberec",
            "title": "Prečo práve Tatry a pomoc deťom?",
            "text": "Pred dvoma rokmi sa na Ceste SNP podaril malý zázrak — vyzbierali sme 12 500 € na pomoc deťom. Tento rok idem do Tatier.\n\n220 kilometrov, 18 400 výškových metrov a každý jeden krok s myšlienkou na deti, ktoré každodenne zvádzajú oveľa ťažšie boje než je výstup na tatranské štíty. V pondelok 7. septembra 2026 vyrážam zo Ždiaru.\n\nKaždý deň tu budem pridávať krátky prehľad, fotky z hrebeňov a aktuálnu polohu. Ďakujem všetkým, ktorí stojíte pri mne a deťoch!",
            "photos": [
                {
                    "url": "assets/img/poster.jpg",
                    "caption": "Oficiálny plagát a výškový profil trasy (220 km • 18 400 m)"
                },
                {
                    "url": "assets/photos/tatry-stity.svg",
                    "caption": "Tatranské štíty — náročný hrebeňový prechod cez 2-tisícovky"
                }
            ],
            "initialLikes": 186
        }
    ]
};
