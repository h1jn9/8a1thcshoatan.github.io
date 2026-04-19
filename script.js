// hiệu ứng load mượt
document.body.style.opacity = 0;

window.onload = () => {
  document.body.style.transition = "0.5s";
  document.body.style.opacity = 1;
}