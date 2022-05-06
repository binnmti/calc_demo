let current = 0;
let calcMode = "none";
let inputValue = 0;

/*
 * 計算処理
 */
const calculate = (a, calcMode, b) => {
  switch (calcMode) {
    case "none":
      return b;

    case "plus":
      return a + b;

    case "minus":
      return a - b;

    case "multiple":
      return a * b;

    case "divide":
      if (b !== 0) {
        return a / b;
      } else {
        return a;
      }
  }
}

/*
 * 各ボタンが押されたときの処理
 */
const onButton = (event) => {
  const button = event.srcElement;
  const value = button.value;
  const display = document.getElementById("display");

  switch(value) {
    case "plus":
    case "minus":
    case "divide":
    case "multiple":
      current = calculate(current, calcMode, inputValue);
      calcMode = value;
      inputValue = 0;
      break;

    case "plusMinus":
      inputValue = inputValue * -1;
      break;

    case "clear":
      inputValue = 0;
      current = 0;
      calcMode = "none";
      break;

    case "equal":
      if (inputValue !== 0) {
        current = calculate(current, calcMode, inputValue);
      }
      inputValue = Math.floor(current);
      calcMode = "none";
      break;

    default:
      inputValue = inputValue * 10 + parseInt(button.value);
      break;
  }

  display.value = Math.floor(inputValue);
};

/*
 * ページがロード完了したら、ボタンにイベントリスナーを追加する
 */
window.addEventListener('load', () => {
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach((button) => {
    button.addEventListener('click', onButton);
  });
});
