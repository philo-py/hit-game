window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#target');
  const scoreDisplay = document.querySelector('#score');

  //的をランダムな位置に移動させる関数
  function moveTarget() {
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  //的をクリックしたらスコア加算＆移動
  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  });

  //最初に一回的を移動させる
  moveTarget();
})