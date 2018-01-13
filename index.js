/*
  Copyright (C) 2018 Juho Rinta-Paavola

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.
*/

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

const headingText = 'Hansen Feng Fuksikapteeniksi';
const colours = ['white', 'lime', 'yellow', 'orange', 'cyan', 'salmon'];
const headingHtml = headingText.split('').map(c =>
    `<span style=\"color: ${colours[getRandomInt(colours.length)]}">${c}</span>`).join('');
$('#heading').html(headingHtml);

setInterval(() => {
  const toRemove = getRandomInt(stars.length);
  stars.splice(toRemove, 1);
  stars.push(getRandomStarParams());
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  stars.forEach(([x, y, r]) => drawStar(x, y, r));
}, 350);
