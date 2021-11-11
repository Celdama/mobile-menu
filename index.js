const links = Array.from(document.querySelectorAll('.link'));
const app = document.querySelector('#app');

const changeBackgroundColor = (color) => {
  app.style.backgroundColor = `${color}`;
};

const resetActiveAttr = (elements) => {
  elements.forEach((element) => {
    const elementToReset = element;
    elementToReset.setAttribute('active', false);
    elementToReset.style.color = '';
  });
};

const changeColorLink = (link, color) => {
  const elementToChangeColor = link;
  elementToChangeColor.style.color = color;
};

const resetActiveSpan = () => {
  const spans = Array.from(document.querySelectorAll('.span-link'));
  spans.forEach((span) => {
    if (span.classList.contains('active-span')) {
      span.classList.remove('active-span');
    }
  });
};

links.forEach((link) => {
  link.addEventListener('click', () => {
    resetActiveAttr(links);
    resetActiveSpan();
    changeBackgroundColor(link.dataset.color);
    link.setAttribute('active', true);
    link.childNodes[3].classList.toggle('active-span');
    changeColorLink(link, link.dataset.color);
  });
});
