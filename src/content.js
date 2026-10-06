import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaPenNib } from 'react-icons/fa6'
import matching from './images/memory_game.png'
import pomodoro from './images/pomodoro_clock.png'
import titanic from './images/titanic.png'
import roofcalc from './images/roofcalc.png'
import housePrices from './images/house_prices.png'
import btcRetirement from './images/btc_retirement.png'
import mtgCollection from './images/mtg_collection.png'
import profileImg from './images/profile-img2.jpg'
import logo from './logo.png'

export { profileImg, logo }

export const profile = {
  name: 'Cody Roof',
  tagline: 'Web | Data | Design',
  headline: 'Independent builder at the intersection of data, Bitcoin, Nostr & games.',
  status: 'Independent · exploring what to build next',
  roles: ['data visualizer', 'web developer', 'Bitcoin & Nostr tinkerer', 'indie game dev', 'FI nerd'],
  bio: [
    `Hey, I'm Cody. I used to be a Visualization Developer at Nordic Global, turning messy data into dashboards people
    actually use. After hours I built web apps, trained models on Kaggle, and made games.`,
    `These days I'm independent, and I'm using the time to find a small, sovereign business at the
    overlap of the things I care about most: Bitcoin, Nostr, data, and video games.`,
  ],
  interests: ['Bitcoin', 'Nostr', 'Data Viz', 'Machine Learning', 'Game Dev', 'Financial Independence'],
  startedYear: 2017,
  email: 'codeman2727@gmail.com',
}

export const links = [
  { label: 'GitHub', href: 'https://github.com/codeman27', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cody-roof/', Icon: FaLinkedin },
  { label: 'Twitter', href: 'https://twitter.com/Codeman27_CO/', Icon: FaXTwitter },
  { label: 'Blog', href: 'https://blog.cody-roof.com', Icon: FaPenNib },
  { label: 'Email', href: 'mailto:codeman2727@gmail.com', Icon: FaEnvelope },
]

// Self-rated comfort levels (0-100).
export const skills = [
  { label: 'Data Visualization', value: 92 },
  { label: 'SQL', value: 85 },
  { label: 'Python', value: 82 },
  { label: 'JavaScript / React', value: 80 },
  { label: 'Machine Learning', value: 62 },
  { label: 'Game Dev', value: 58 },
]

export const exploring = [
  { title: 'Bitcoin analytics', desc: 'Dashboards and alerts built on open mempool & on-chain data.' },
  { title: 'Nostr data tools', desc: 'Relay stats, feed analytics, and discovery for a decentralized social graph.' },
  { title: 'Indie games', desc: 'Small, polished games, maybe with Lightning-powered rewards.' },
  { title: 'Data products', desc: 'Turning public datasets into tools people pay for, like RoofCalc.' },
]

export const projects = [
  {
    id: 'btc_retirement',
    title: 'Bitcoin Retirement Calculator',
    category: 'web',
    image: btcRetirement,
    summary: 'When can you retire if you never sell your Bitcoin?',
    text: `I built this to model the "borrow 'til you die" strategy: instead of selling, you borrow against your stack
    each year, refinance the old loan plus that year's expenses, and let BTC appreciation outrun the debt. It answers
    "When can I retire?" or "How much BTC do I need?" with a year-by-year breakdown of loans, collateral, and free
    BTC across aggressive, moderate, and conservative LTV profiles. It's plain HTML, CSS, and JavaScript with no
    build step.`,
    stack: ['JavaScript', 'HTML', 'CSS', 'Bitcoin'],
    site: 'https://btc.cody-roof.com/',
    code: 'https://github.com/Codeman27Org/btc-retirement-calc',
  },
  {
    id: 'mtg_collection',
    title: 'MTG Collection',
    category: 'web',
    image: mtgCollection,
    summary: 'Magic: The Gathering collection manager and deck builder synced over Nostr.',
    text: `I built this to manage my Magic cards and decks right in the browser. There's no app server: data lives in
    IndexedDB and syncs between devices through Nostr relays, encrypted with NIP-44 so only your key can read it.
    It imports CSVs from the popular collection apps, tracks which binder or deck every copy is in, builds decks
    with format legality and analytics, and scans cards with the phone camera using on-device OCR. Card data
    and prices come from Scryfall.`,
    stack: ['JavaScript', 'Nostr', 'IndexedDB', 'Vite'],
    site: 'https://mtg.cody-roof.com/#/decks',
    code: 'https://github.com/Codeman27Org/mtg-collection',
  },
  {
    id: 'roofcalc',
    title: 'RoofCalc',
    category: 'web',
    image: roofcalc,
    summary: 'Real-estate deal analyzer: type an address, get the numbers.',
    text: `I created this to try and help friends and family analyze real estate deals by typing in an address and
    getting as much data as it could on its own with the ability to update details after the initial data pull.
    It uses a React frontend with a Python Flask backend.`,
    stack: ['React', 'Python', 'Flask', 'APIs'],
    site: 'http://roofcalc.cody-roof.com/',
    code: 'https://github.com/codeman27/RoofCalc',
  },
  {
    id: 'house_prices',
    title: 'House Price Predictions',
    category: 'data',
    image: housePrices,
    summary: 'Kaggle regression: exploring what drives a home\u2019s sale price.',
    text: `My second submission to Kaggle and my second completely solo Data Science project. I applied what I learned
    from the previous project and set up a repeatable cleaning process from the start, so this one went a lot
    smoother. I got deep into exploratory analysis before moving on.`,
    stack: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    site: 'https://house-prices.cody-roof.com/',
    code: 'https://github.com/Codeman27Org/house_prices',
    insight: {
      title: 'Correlation with SalePrice',
      format: (v) => (v / 100).toFixed(2),
      data: [
        { label: 'OverallQual', value: 79 },
        { label: 'GrLivArea', value: 71 },
        { label: 'GarageCars', value: 64 },
        { label: 'GarageArea', value: 62 },
        { label: 'TotalBsmtSF', value: 61 },
      ],
    },
  },
  {
    id: 'titanic',
    title: 'Titanic Predictions',
    category: 'data',
    image: titanic,
    summary: 'Kaggle classification: who survived, and why.',
    text: `My first submission to Kaggle and my first completely solo Data Science project. The big lesson: build data
    cleaning functions at the beginning. I got to the end of exploration and training, went to set up testing, and
    remembered that reusable cleaning was exactly why you write them first. I won't make that mistake again.`,
    stack: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    site: 'http://titanic.cody-roof.com/',
    code: 'https://github.com/codeman27/Kaggle_TitanicML',
    insight: {
      title: 'Survival rate by group',
      format: (v) => `${v}%`,
      data: [
        { label: 'Female', value: 74 },
        { label: '1st class', value: 63 },
        { label: '2nd class', value: 47 },
        { label: '3rd class', value: 24 },
        { label: 'Male', value: 19 },
      ],
    },
  },
  {
    id: 'matching',
    title: 'Matching Game',
    category: 'web',
    image: matching,
    summary: 'Memory card game with move counter, timer, and star rating.',
    text: `A game I built in the Udacity Front-End Nanodegree program, which I completed in 2018. Vanilla JavaScript,
    DOM manipulation, and CSS animations. I'll eventually replace it with more real-world projects.`,
    stack: ['JavaScript', 'HTML', 'CSS'],
    site: 'http://matching-game.cody-roof.com/',
    code: 'https://github.com/codeman27/Udacity_FrontEndDeveloper_Project2',
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro Clock',
    category: 'web',
    image: pomodoro,
    summary: 'Focus timer with adjustable work and break sessions.',
    text: `A Pomodoro clock I built in 2017 as a freeCodeCamp project. It was one of my first web apps, and I'll be
    replacing it as I ship more.`,
    stack: ['JavaScript', 'HTML', 'CSS'],
    site: 'http://pomodoro.cody-roof.com',
    code: 'https://github.com/codeman27/pomodoro',
  },
]
