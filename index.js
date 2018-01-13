const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resize = () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}
window.addEventListener('resize', resize);
resize();

const drawStar = (x, y, r) => {
  const smallR = r / 4;
  ctx.beginPath();
  ctx.moveTo(x - r, y);
  ctx.lineTo(x - smallR, y + smallR);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x + smallR, y + smallR);
  ctx.lineTo(x + r, y);
  ctx.lineTo(x + smallR, y - smallR);
  ctx.lineTo(x, y - r);
  ctx.lineTo(x - smallR, y - smallR);
  ctx.closePath();
  ctx.fill();
}

drawStar(100, 100, 12);
