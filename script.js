// JavaScript

const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//背景色を変更する関数
//function構文を使う書き方
function changeColor(){
  document.body.style.backgroundColor = color.value;

  //カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = 'コード：' + color.value + '(white)';
  } else if (color.value === '#000000') {
    text.textContent = 'コード：' + color.value + '(black)';
  } else {
    text.textContent = 'コード：' + color.value;
  }

}

//アロー関数を使う書き方
// const changeColor = () => {
//   document.body.style.backgroundColor = color.value;
//   text.textContent = color.value;
// }

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', changeColor);
    