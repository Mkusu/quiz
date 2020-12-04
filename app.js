const quiz = [
  {
    question:'次のうち、鶴舞線にない駅はどれ？',
    answers:[
      '原',
      '伏見',
      '今池',
      '丸の内'
    ],
    correct:'今池'
  },{
    question:'次のうち、サッカー選手ではない人は誰？',
    answers:[
      '田中マルクス闘利王',
      'リオネル・メッシ',
      '中村俊輔',
      '鈴木愛理'
    ],
    correct:'鈴木愛理'
  },{
    question:'次のうち、名古屋市にない区はどれ？',
    answers:[
      '中川区',
      '港区',
      '今池区',
      '守山区'
    ],
    correct:'今池区'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;




const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setUpQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;

  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setUpQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }
  else{
    window.alert('不正解！');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    setUpQuiz();
  }else{
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！')
  }
}

let handleIndex = 0;

while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) =>{
    clickHandler(e);
  });
  handleIndex++;
}
