const questions = [
  {
    question: "Vem av oss skulle mest troligt råka spilla vin över hela bordet på en middag?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Najma"
  },
  {
    question: "Vilken typ av kille skulle Melissa gå hem med en fredag kväll?",
    options: ["Den charmiga flörtaren", "Den mystiska bad boyen", "Den som gillar vin och skvaller"],
    answer: "Det är väl ändå givet att Melissas smak på killar är den mystiska bad boyen som hon lyckas få BESATT ch aldrig blir av med 🤡."
  },
  {
    question: "Vem är mest benägen att flörta och gå hem med bartendern efter en utekväll?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Den oskyldiga lilla ängel, Najma 👼🏾"
  },
  {
    question: "Vem är mest benägen att starta en dansbattle mot en man i kostym på en finrestaurang?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Ingen hade blivit förvånad över om Melissa säkert redan kan breakdance?🪩"
  },
  {
    question: "Om vi var en trio i en film, vilken genre skulle det vara?",
    options: ["Romantisk komedi med kaos", "Actionkomedi med galna upptåg", "Drama med vin och intriger"],
    answer: "Hahahah en snarare hel jävla serie med 4 säsonger av KAOS, men absolut actionkomedi med galna upptåg"
  },
  {
    question: "Vad är vårt motto när det gäller killar och relationer?",
    options: ["Flirta först, analysera senare", "Det här känns som en kille som kan trigga mina daddy issues, honom tar vi!", "Alkohol löser allt, skit i konsekvenserna"],
    answer: "Det här känns som en kille som kan trigga mina daddy issues, honom tar vi!😍🤡"
  },
 {
    question: "Vem är mest benägen att dricka alldeles för mycket alkohol och börja avslöja sina djupaste hemligheter?",
    options: ["Melissa som alltid snackar öppet & ärligt", "Najma som inte har något filter efter 2 enheter", "Milja som får sin autism botad med lite alkohol och helt plötsligt börjar öppna upp sig" ],
    answer: "Najma eftersom hon inte har något filter 2 enheter in! 🍾🥂"
  },
  {
    question: "Vem av oss är troligtvis bäst i sängen?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Melissa utan tvekan, det har vi både hört och sett videobevis på! 👉🏽👌🏽"
  },
  {
    question: "Vem är mest benägen att smyga iväg för en hemlig kyss på en fest?",
    options: ["Melissa, flirtigt och busigt", "Najma, galet och spontant", "Milja, väl och noggrant planerat innan så ingen märker"],
    answer: "Milja, väl och noggrant planerat så ingen märker"
  },
  {
    question: "Vem är mest benägen att bli ert livs party-hjälte och rädda alla med skratt?",
    options: ["Melissa som alltid är festens centrum", "Najma som blir spontan och galen", "Milja som organiserar kaoset bakom kulisserna"],
    answer: "Najma som fortfarande saknar gränser efter intag av alkohol och håller igång och aldrig vill gå hem."
  },
  {
    question: "Vem tar reda på ALLT om killen hon dejtar och är MNM'S bästa stalker?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Milja som vet adress till hans ex och vad hans mormors hund heter redan innan hon träffat honom🕵🏼‍♀️"
  },
  {
    question: "Vem är mest benägen att testa någon skum substans på en hemmafest?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Najma som tar emot allt så länge det är gratis 💊"
  },
  {
    question: "Vad är vårt hemliga vapen när vi snackar om killar och relationer?",
    options: ["Vår humor", "Alkohol i MÄNGDER", "Våra pikiga kommentarer"],
    answer: "Alkohol i mängder såklart, vi blir ju som en filterlös dokusåpa efter några glas. Vill du se en bild på min fitta btw?🤭"
  },
  {
    question: "Vem av oss skulle kunna vara tillsammans med någon bara för pengar?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Melissa, helt klart MNM'S mest kompatibla Housewife eller kanske snarare Golddigger?? Vem fan blir ens bjuden till Maldiverna??😭"
  },
  {
    question: "Vem av oss är mest trolig att bli förälskad vid första ögonkastet?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Milja som är alldeles för emotionell och skulle kunna bli kär i en get 🐐"
  },
  {
    question: "Vem av oss är mest trolig att fortsätta använda en dejtingapp även efter att ha hittat en partner?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Najma som garanterat vill utforska om gräset är grönare på andra sidan🧠"
  },
   {
    question: "Vem är mest benägen att ha ett one-night-stand med någon på första dejten?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "HAHA men alla 3, vi hade glatt lagt oss på rygg på köksbordet, särat på benen och tagit emot"
  },
   {
    question: "Vem skulle troligen börja flörta med bartendern bara för att få gratis drinkar?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Melissa som lyckas charma exakt alla killar hon stöter på🥹🥰"
  },
   {
    question: "Vem skulle troligen hamna i säng med någon bara för att vinna ett vad?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Melissa, oxen är känd för att vara en envis vinnarskalle. Sen är ju du också utan tvekan mest kåt 💦💦"
  },
   {
    question: "Vem är mest benägen att ha sex på ett extremt oväntat ställe?",
    options: ["Melissa", "Najma", "Milja"],
    answer: "Hela jävla MNM och samtidigt ringt varandra på facetime under akten 🫦🤳🏽"
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const progressEl = document.querySelector('.progress');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  nextBtn.style.display = 'none'; 

  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => selectOption(button, q.answer, q.detailedAnswer));
    optionsEl.appendChild(button);
  });

  updateProgress();
}

function selectOption(button, correctAnswer, detailedAnswer) {
  const buttons = optionsEl.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true); 

  if(button.textContent === correctAnswer) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
    buttons.forEach(btn => {
      if(btn.textContent === correctAnswer) btn.classList.add('correct');
    });
  }

  const answerEl = document.createElement('p');
  answerEl.classList.add('detailed-answer');
  answerEl.textContent = detailedAnswer || `Rätt svar: ${correctAnswer}`;
  optionsEl.appendChild(answerEl);

  setTimeout(() => {
    nextBtn.style.display = 'block';
  }, 300); 
}

function updateProgress() {
  progressEl.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if(currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.classList.add('hidden');
  optionsEl.classList.add('hidden');
  nextBtn.classList.add('hidden');
  progressEl.style.width = `100%`;
  resultEl.textContent = `Du fick ${score} av ${questions.length} rätt! 🎉`;
  resultEl.classList.remove('hidden');
}

loadQuestion();