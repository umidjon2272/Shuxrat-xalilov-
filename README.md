# AzizjonSMM Portfolio

Professional SMM portfolio saytи — React + SCSS (BEM) bilan qurilgan.

## Ishga tushirish

```bash
npm install
npm run dev
```

## Build qilish

```bash
npm run build
```

## Papka tuzilmasi

```
src/
├── components/
│   ├── Navbar/      Navbar.jsx + Navbar.scss
│   ├── Hero/        Hero.jsx + Hero.scss
│   ├── Stats/       Stats.jsx + Stats.scss
│   ├── About/       About.jsx + About.scss
│   ├── Services/    Services.jsx + Services.scss
│   ├── Projects/    Projects.jsx + Projects.scss
│   ├── Pricing/     Pricing.jsx + Pricing.scss
│   ├── Contact/     Contact.jsx + Contact.scss
│   └── Footer/      Footer.jsx + Footer.scss
├── styles/
│   ├── _variables.scss   Ranglar, shriftlar, o'lchamlar
│   ├── _mixins.scss      Qayta ishlatiladigan SCSS mixinlar
│   └── global.scss       Global uslublar
├── data/
│   └── index.js          Barcha ma'lumotlar
├── hooks/
│   └── useInView.js      Scroll animatsiya hook
├── App.jsx
└── main.jsx
```

## O'zgartirish

- **Ma'lumotlar**: `src/data/index.js` faylida ism, telefon, Telegram, loyihalar
- **Ranglar**: `src/styles/_variables.scss` faylida
- **Narxlar**: `src/data/index.js` → PLANS massivi
