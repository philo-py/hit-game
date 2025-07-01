window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#target');
  const scoreDisplay = document.querySelector('#score');
  const timerDisplay = document.querySelector('#timer');
  
  let score = 0;
  let timeLeft = 30;
  let gameOver = false;

  //的をランダムな位置に移動させる関数
  function moveTarget() {
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  //的をクリックしたらスコア加算＆移動
  target.addEventListener('click', () => {
    if(gameOver) return;
    
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  });

  //タイマーを一秒ごとにカウントダウン
  const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent =timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      gameOver = true;
      target.style.display = 'none'; //的を消す
      alert(`終了！あなたのスコアは${score}点です！`);
    }
  }, 1000);

  //最初に一回的を移動させる
  moveTarget();
})