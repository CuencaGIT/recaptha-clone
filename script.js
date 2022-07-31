let svg = document.getElementById('circle');
let check = document.getElementById('box');
let checks = document.getElementById('check');

$(check).click(function () {
  check.style.display = 'none';
  svg.style.display = 'flex';
  setInterval(() => {
    checks.style.display = 'flex';
    svg.style.display = 'none';
  }, 1000);
});
