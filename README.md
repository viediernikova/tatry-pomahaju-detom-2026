# 🏔️ Web «Tatry pomáhajú deťom 2026»

Oficiálny, rýchly a moderný web pre charitatívny projekt Radoslava Hyžu: trek cez Vysoké a Západné Tatry na pomoc deťom so ZŤP.

---

## 🚀 Ako otvoriť a zobraziť web (Prezeranie)

1. Otvorte priečinok projektu v počítači.
2. Dvakrát kliknite na súbor **`index.html`** — web sa okamžite otvorí v prehliadači (Chrome, Edge, Safari, Firefox).
3. Web funguje samostatne bez nutnosti inštalovať Node.js alebo webový server.

---

## ✏️ Ako upravovať texty a denník (Súbor `content.js`)

Všetky texty, štatistiky, IBAN, odkazy a denné zápisky sa nachádzajú v jedinom prehľadnom súbore: **`content.js`**.  
Dá sa upravovať v ľubovoľnom textovom editore alebo priamo cez webové rozhranie GitHubu z telefónu.

### 1. Pridanie nového dňa do denníka
V súbore `content.js` nájdite zoznam `diary` a vložte novú položku:
```javascript
{
  id: "den-1",
  dayNumber: 1,
  date: "7. september 2026",
  location: "Ždiar ➔ Chata pri Zelenom plese",
  title: "Prvé stúpanie a štart expedície",
  text: `Dnes sme úspešne odštartovali zo Ždiaru...`,
  photos: [
    {
      url: "assets/photos/foto-den-1.jpg",
      caption: "Výstup na Jahňací štít"
    }
  ],
  initialLikes: 45
},
```

### 2. Úprava transparentného účtu alebo kontaktov
V sekcii `meta` a `requisites` môžete kedykoľvek upraviť IBAN, telefónne číslo alebo odkazy na sociálne siete.

---

## 🌐 Bezplatné zverejnenie na internet cez GitHub Pages (za 3 minúty)

1. Prihláste sa na [GitHub.com](https://github.com).
2. Vytvorte nový verejný repozitár (napr. `tatry-pomahaju-detom`).
3. Nahrajte doň všetky súbory z tohto priečinka (`index.html`, `style.css`, `content.js`, `app.js`, priečinok `assets`).
4. V repozitári kliknite na **Settings** ➔ v ľavom menu na **Pages**.
5. V sekcii **Build and deployment** vyberte vetvu `main` (alebo `master`), priečinok `/(root)` a kliknite na **Save**.
6. Do 2 minút bude web dostupný na bezplatnej adrese:  
   `https://vas-login.github.io/tatry-pomahaju-detom/`

V nastaveniach GitHub Pages si môžete neskôr bezplatne pridať aj vlastnú doménu (napr. `tatrypomahajudetom.sk`).
