let unko = 'Hello World!';

//unko = 'Hello World2!!';

const bigUnko = 'He..Hell...Hello World!';

const inoki = ['いーち','にー','さーん','ダーーー！！'];
/*
let index = 0;
while(index < inoki.length){
  console.log(inoki[index]);
  index++;
}*/
const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  }
  else{
    console.log('ボンバ。。。');
  }
};

const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello');
  }
};

document.getElementsByTagName('button')[3].addEventListener('click', ()=> {
  window.alert('Hello!!');
});
