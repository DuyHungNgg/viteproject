const slider   = document.getElementById('slider');
const imgs     = slider.querySelectorAll('.slide-img');
const dots     = document.querySelectorAll('.dot');

const sources = Array.from(imgs).map(img => img.src);
let current = 0;

function render() {
  const bigIdx   = current;
  const midIdx   = (current + 1) % sources.length;
  const smallIdx = (current + 2) % sources.length;

  imgs[0].src = sources[bigIdx];
  imgs[1].src = sources[midIdx];
  imgs[2].src = sources[smallIdx];

  imgs.forEach(img => img.classList.remove('big', 'small'));
  imgs[0].classList.add('big');
  imgs[1].classList.add('small');
  imgs[2].classList.add('small');

  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-yellow-600', i === bigIdx);
    dot.classList.toggle('bg-gray-400',  i !== bigIdx);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    current = i;
    render();
  });
});

render();
