const questions = [
  {
    question: 'Где дети ищут подарки утром 1 января?',
    options: [
      'A : под ёлкой',
      'B : под палкой',
      'C : под скалкой',
      'D : под мухой',
    ],
    rightAnswer: 0
  },
  {
    question: 'Что собирает девушка на картине Карла Брюллова «Итальянский полдень»?',
    options: [
      'A: Вишни',
      'B: Абрикосы',
      'C: Виноград',
      'D: Яблоки',
    ],
    rightAnswer: 2
  },
  {
    question: 'Что из перечисленного пирог?',
    options: [
      'A : кусака',
      'B : закаляка',
      'C : забияка',
      'D : кулебяка',
    ],
    rightAnswer: 3
  },
  {
    question: 'Провожают, как известно, по уму, а как встречают?',
    options: [
      'A: по одёжке',
      'B: по сберкнижке',
      'C: по прописке',
      'D: по рекомендации',
    ],
    rightAnswer: 0
  },
  {
    question: 'Как называют мелководный бассейн, предназначенный для детей?',
    options: [
      'A: утятник',
      'B: лягушатник',
      'C: селёдочник',
      'D: тюленник',
    ],
    rightAnswer: 1
  },
  {
    question: 'Что, по словам кота Бегемота, он делал, когда его пришли арестовывать?',
    options: [
      'A: починял примус',
      'B: чистил обувь',
      'C: варил кашу',
      'D: играл в шахматы',
    ],
    rightAnswer: 0
  },
  {
    question: 'Бочонок с каким числом в русском лото принято называть «топориками»?',
    options: [
      'A: 11',
      'B: 69',
      'C: 77',
      'D: 88',
    ],
    rightAnswer: 2
  },
  {
    question: 'Что из перечисленного название концертного зала, а не стадиона?',
    options: [
      'A: «Камп Ноу»',
      'B: «Альберт-холл»',
      'C: «Сан-Сиро»',
      'D: «Энфилд»',
    ],
    rightAnswer: 1
  },
  {
    question: 'В каком фильме Бен Аффлек был не только исполнителем главной роли, но и режиссёром?',
    options: [
      'A: «Операция «Арго»»',
      'B: «Операция «Трест»»',
      'C: «Операция «Святой Януарий»»',
      'D: «Операция «Ы» …»',
    ],
    rightAnswer: 0
  },
  {
    question: 'Как не называется ни одна из глав романа Лермонтова «Герой нашего времени»?',
    options: [
      'A: «Княжна Мэри»',
      'B: «Бэла»',
      'C: «Княгиня Лиговская»',
      'D: «Максим Максимыч»',
    ],
    rightAnswer: 2
  },
  {
    question: 'Что норвежцы дарят на Новый год в качестве символа тепла и счастья?',
    options: [
      'A: дрова',
      'B: свечи',
      'C: спички',
      'D: пледы',
    ],
    rightAnswer: 2
  },
  {
    question: 'Где впервые была произнесена фраза «Не в силе Бог, а в правде», ставшей впоследствии крылатой?',
    options: [
      'A: в Новгороде',
      'B: в фильме «Брат 2»',
      'C: в Белом Море',
      'D: в соборе Парижской Богоматери',
    ],
    rightAnswer: 0
  },
  {
    question: 'Как называется психологический эффект, который несколько лет назад открыли американские ученые?',
    options: [
      'A: оконной рамы',
      'B: закрытой фрамуги',
      'C: дверного проёма',
      'D: туалетного крючка',
    ],
    rightAnswer: 2
  },
  {
    question: 'Какой предмет стал причиной смерти французского композитора Жан-Батиста Люлли?',
    options: [
      'A: дирижёрская трость',
      'B: струна рояля',
      'C: гусиное перо',
      'D: смычок скрипки',
    ],
    rightAnswer: 0
  },
  {
    question: 'Какой камень стал символом препятствия  на пути к цели?',
    options: [
      'A: лунный камень',
      'B: камень преткновения',
      'C: камень за пазухой',
      'D: камень в почках',
    ],
    rightAnswer: 1
  },
];

const option1 = document.querySelector('.option1'),
  option2 = document.querySelector('.option2'),
  option3 = document.querySelector('.option3'),
  option4 = document.querySelector('.option4');

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');
numberOfQuestion = document.getElementById('number-of-question'),
  numberOfAllQuestion = document.getElementById('number-of-all-question');

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById('answers-tracker');
const btnNext = document.getElementById('btn-next');

const fifty = document.querySelector('.fifty').onclick = function () {
  document.querySelector('.option').hidden = true;
  document.querySelector('.fifty').disabled = true;
};
const contact = document.querySelector('.contact').onclick = function () {
  document.querySelector('.contact').disabled = true;
  alert('Наверное это А');
};

let score = 0;

const correctAnswer = document.getElementById('correct-answer'),
  numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
  btnTryAgain = document.getElementById('btn-try-again');

numberOfAllQuestion.innerHTML = questions.length
const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let completedAnswers = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach(item => {
        if (item == randomNumber) {
          hitDuplicate = true;
        }
      });
      if (hitDuplicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    };
    if (completedAnswers == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  };
  completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
    quizOver();
  }
  disabledOptions();
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  });
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove('disabled', 'correct', 'wrong');
  })
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = status => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
  if (!optionElements[0].classList.contains('disabled')) {
    alert('Сделайте Ваш выбор!!!');
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}

const quizOver = () => {
  document.querySelector('.quiz-over-modal').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestion2.innerHTML = questions.length;
}

const tryAgain = () => {
  window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener('load', () => {
  randomQuestion();
  answerTracker();
})



























