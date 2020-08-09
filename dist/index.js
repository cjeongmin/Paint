"use strict";
const canvas = document.querySelector('.canvas'), ctx = canvas.getContext('2d');
const colors = Array.from(document.querySelector('.colors').children).filter(element => element.className === 'color');
const penWidth = document.querySelector('.penWidth');
penWidth.addEventListener('change', () => {
    ctx.lineWidth = parseFloat(penWidth.value);
});
// choose color
colors.forEach(element => {
    element.addEventListener('click', () => {
        const color = element.getAttribute('style');
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
