const canvas = document.querySelector('.canvas') as HTMLCanvasElement,
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const colors = Array.from(
  (document.querySelector('.colors') as HTMLDivElement).children
).filter(element => element.className === 'color');

const penWidth = document.querySelector('.penWidth') as HTMLInputElement;
penWidth.addEventListener('change', () => {
  ctx.lineWidth = parseFloat(penWidth.value);
});

// choose color
colors.forEach(element => {
  element.addEventListener('click', () => {
    const color = element.getAttribute('style') as string;
    ctx.strokeStyle = color.slice(color.search('#'), color.length - 1);
  });
});

// draw a line
let painting = false;
ctx.lineWidth = parseFloat(penWidth.value);
canvas.addEventListener('mousedown', () => {
  painting = true;
});

canvas.addEventListener('mousemove', e => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    return;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
});

canvas.addEventListener('mouseup', () => {
  painting = false;
});
canvas.addEventListener('mouseleave', () => {
  painting = false;
});
