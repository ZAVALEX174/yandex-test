const cardList = [
  'ostapBender2.svg',
  'ostapBender2.svg',
  'ostapBender2.svg',
  'ostapBender2.svg',
  'ostapBender2.svg',
  'ostapBender2.svg',
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

// const prevBtn = document.querySelector('.prev-button');
// const nextBtn = document.querySelector('.next-button');

let activCard = 0;
let activCardName = 0;
let activCardPar = 0;
let activCardBtn = 0;

const sliderPlase = document.querySelector('.participants__sliders-line');
const widthOffset = document.querySelector(
  '.participants__sliders-wrapper'
).clientWidth;
sliderPlase.style.width = 3 * widthOffset + 'px';
sliderPlase.style.height = widthOffset + 'px';
sliderPlase.style.left = '-' + widthOffset + 'px';

let flag = true;

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
};

const prevCardGenerate = (w = false) => {
  let prevCard = activCard - 1;
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
  if (w) item.style.width = 0;

  sliderPlase.prepend(item);
};

const nextCard = () => {
  if (!flag) return;
  flag = !flag;
  activCard++;
  activCardName++;
  activCardPar++;
  activCardBtn++;
  if (activCard >= cardList.length) activCard = 0;
  if (activCardName >= cardListName.length) {
    activCardName = 0;
  }
  if (activCardPar >= cardListPar.length) activCardPar = 0;
  if (activCardBtn >= cardListBtn.length) activCardBtn = 0;

  nextCardGenerate();
  animate({
    duration: 500,
    draw: function (progress) {
      document.querySelector('.participants__slider').style.width =
        widthOffset * (1 - progress) + 'px';
    },
    removeElement: document.querySelector('.participants__slider'),
  });
};

const prevCard = () => {
  if (!flag) return;
  flag = !flag;
  activCard--;
  activCardName--;
  activCardPar--;
  activCardBtn--;
  if (activCard < 0) activCard = cardList.length - 1;
  if (activCardName < 0) activCardName = cardListName.length - 1;
  if (activCardPar < 0) activCardPar = cardListPar.length - 1;
  if (activCardBtn < 0) activCardBtn = cardListBtn.length - 1;

  // document.querySelector('.participants__slider:last-child').remove();

  prevCardGenerate(true);
  animate({
    duration: 800,
    draw: function (progress) {
      document.querySelector('.participants__slider').style.width =
        widthOffset * progress + 'px';
    },
    removeElement: document.querySelector('.participants__slider:last-child'),
  });
};

const nextBtn = document
  .querySelector('.next-button')
  .addEventListener('click', nextCard);
const prevBtn = document
  .querySelector('.prev-button')
  .addEventListener('click', prevCard);
createSliderCards();

const animate = ({ duration, draw, removeElement }) => {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    let step = (time - start) / duration;
    if (step > 1) step = 1;
    draw(step);
    if (step < 1) {
      requestAnimationFrame(animate);
    } else {
      removeElement.remove();
      flag = true;
    }
  });
};

setInterval(nextCard, 4000);
