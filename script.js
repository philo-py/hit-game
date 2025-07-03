window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#target');
  const scoreDisplay = document.querySelector('#score');
  const timerDisplay = document.querySelector('#timer');
  const startResetBtn = document.querySelector('#startResetBtn');
  
  let score = 0;
  let timeLeft = 30;
  let gameOver = true;
  let timerId = null;

  //的をランダムな位置に移動させる関数
  function moveTarget() {
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  //ゲーム開始処理
  function startGame() {
    score = 0;
    timeLeft =30;
    gameOver = false;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft
    target.style.display = 'block';
    moveTarget();
    startResetBtn.textContent = 'リセット';
    timerId = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerId);
        gameOver = true;
        target.style.display = 'none';
        startResetBtn.textContent = 'スタート';
        alert(`終了！あなたのスコアは${score}点です！`);
      }
    }, 1000);
  }

  //ゲームリセット処理
  function resetGame() {
    clearInterval(timerId);
    gameOver = true;
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    target.style.display = 'none';
    startResetBtn.textContent = 'スタート';
  }

  //ボタンのクリックでゲーム開始　or　リセット
  startResetBtn.addEventListener('click', () => {
    if (gameOver) {
      startGame();
    } else {
      resetGame();
    }
  });

  //的をクリックしたらスコア加算＆移動
  target.addEventListener('click', () => {
    if(gameOver) return;
    
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  });
  
  //最初は的を非表示にしておく
  target.style.display = 'none';
});