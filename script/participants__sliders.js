const cardList = [
  'ostapBender.svg',
  'ostapBender.svg',
  'ostapBender.svg',
  'ostapBender.svg',
  'ostapBender.svg',
  'ostapBender.svg',
];
const cardListName = [
  'Хосе-Рауль Капабланка',
  'Эммануил Ласкер',
  'Александр Алехин',
  'Арон Нимцович',
  'Рихард Рети',
  'Остап Бендер',
];

const cardListPar = [
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Чемпион мира по шахматам',
  'Гроссмейстер',
];

const cardListBtn = [
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
  'Подробнее',
];

console.log(cardListName.length - 1);

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

let activCard = 0;
let activCardName = 0;
let activCardPar = 0;
let activCardBtn = 0;

const sliderPlase = document.querySelector('.participants__sliders-line');
console.log(sliderPlase);

let flag = true;

// const createSliderCards = () => {
//   const card = document.createElement('div');
//   card.classList.add('participants__slider');

//   const cardImg = document.createElement('img');
//   cardImg.classList.add('participants__slider-image');
//   cardImg.alt = `${alt}`;
//   console.log(cardImg);
//   // cardImg.src = '../images/' + images[activCard];
//   cardImg.src = img;

// const cardTitle = document.createElement('h3');
// cardTitle.classList.add('participants__slider-title');
// cardTitle.textContent = title;

// const cardParagrahp = document.createElement('p');
// cardParagrahp.classList.add('participants__slider-description');
// cardParagrahp.textContent = par;

// const cardBtn = document.createElement('button');
// cardBtn.classList.add('participants__slider-btn');
// cardBtn.textContent = btn;

//   card.append(cardImg, cardTitle, cardParagrahp, cardBtn)

//   sliderPlase.append(card);
// }

const createSliderCards = () => {
  const item = document.createElement('div');
  item.classList.add('participants__slider');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[activCard];
  img.classList.add('participants__slider-image');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[activCardName];
  nameCard.classList.add('participants__slider-title');

  const cardParagrahp = document.createElement('p');
  cardParagrahp.classList.add('participants__slider-description');
  cardParagrahp.textContent = cardListPar[activCardPar];

  const cardBtn = document.createElement('button');
  cardBtn.classList.add('participants__slider-btn');
  cardBtn.textContent = cardListBtn[activCardBtn];

  item.append(img, nameCard, cardParagrahp, cardBtn);

  sliderPlase.append(item);

  prevCardGenerate();
  nextCardGenerate();
};

const nextCardGenerate = () => {
  let nextCard = activCard + 1;
  console.log(activCard);
  console.log(nextCard);
  let nextCardName = activCardName + 1;
  let nextCardPar = activCardPar + 1;
  let nextCardBtn = activCardBtn + 1;

  if (nextCard >= cardList.length) nextCard = 0;
  if (nextCardName >= cardListName.length) nextCardName = 0;
  if (nextCardPar >= cardListPar.length) nextCardPar = 0;
  if (nextCardBtn >= cardListBtn.length) nextCardBtn = 0;

  const item = document.createElement('div');
  item.classList.add('participants__slider');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[nextCard];
  img.classList.add('participants__slider-image');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[nextCardName];
  nameCard.classList.add('participants__slider-title');

  const cardParagrahp = document.createElement('p');
  cardParagrahp.classList.add('participants__slider-description');
  cardParagrahp.textContent = cardListPar[nextCardPar];

  const cardBtn = document.createElement('button');
  cardBtn.classList.add('participants__slider-btn');
  cardBtn.textContent = cardListBtn[nextCardBtn];

  item.append(img, nameCard, cardParagrahp, cardBtn);

  sliderPlase.append(item);
  console.log(cardListName[0]);
};

const prevCardGenerate = () => {
  let prevCard = activCard - 1;
  console.log(activCard);
  console.log(prevCard);
  let prevCardName = activCardName - 1;
  let prevCardPar = activCardPar - 1;
  let prevCardBtn = activCardBtn - 1;

  if (prevCard < 0) prevCard = cardList.length - 1;
  if (prevCardName < 0) prevCardName = cardListName.length - 1;
  if (prevCardPar < 0) prevCardPar = cardListPar.length - 1;
  if (prevCardBtn < 0) prevCardBtn = cardListBtn.length - 1;

  const item = document.createElement('div');
  item.classList.add('participants__slider');

  const img = document.createElement('img');
  img.alt = '';
  img.src = '../images/' + cardList[prevCard];
  img.classList.add('participants__slider-image');

  const nameCard = document.createElement('h3');
  nameCard.textContent = cardListName[prevCardName];
  nameCard.classList.add('participants__slider-title');

  const cardParagrahp = document.createElement('p');
  cardParagrahp.classList.add('participants__slider-description');
  cardParagrahp.textContent = cardListPar[prevCardPar];

  const cardBtn = document.createElement('button');
  cardBtn.classList.add('participants__slider-btn');
  cardBtn.textContent = cardListBtn[prevCardBtn];

  item.append(img, nameCard, cardParagrahp, cardBtn);

  sliderPlase.prepend(item);
  console.log(cardListName[5]);
};

const nextCard = () => {
  activCard++;
  activCardName++;
  activCardPar++;
  activCardBtn++;
  if (activCard >= cardList.length) activCard = 0;
  if (activCardName >= cardListName.length) {
    activCardName = 0;
    console.log(activCardName);
  }
  if (activCardPar >= cardListPar.length) activCardPar = 0;
  if (activCardBtn >= cardListBtn.length) activCardBtn = 0;

  nextCardGenerate();
  console.log(activCardName);
}

const prevCard = () => {
  activCard--;
  activCardName--;
  activCardPar--;
  activCardBtn--;
  if (activCard < 0) activCard = cardList.length - 1;
  if (activCardName < 0) activCardName = cardListName.length - 1;
  if (activCardPar < 0) activCardPar = cardListPar.length - 1;
  if (activCardBtn < 0) activCardBtn = cardListBtn.length - 1;

  prevCardGenerate();
}

createSliderCards();

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);