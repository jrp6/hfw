const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const resize = () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
};
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
};

let stars = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomStarParams = () => [
  getRandomInt(canvas.width),
  getRandomInt(canvas.height),
  getRandomInt(13 - 4) + 4, // radius
];

// How many stars per pixel
const starDensity = 0.0002;

const nStars = starDensity * canvas.width * canvas.height;
for (let i = 0; i < nStars; i += 1) {
  stars.push(getRandomStarParams());
}

setInterval(() => {
  const toRemove = getRandomInt(stars.length);
  stars.splice(toRemove, 1);
  stars.push(getRandomStarParams());
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  stars.forEach(([x, y, r]) => drawStar(x, y, r));
}, 350);
