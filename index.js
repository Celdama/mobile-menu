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

links.forEach((link) => {
  link.addEventListener('click', () => {
    resetActiveAttr(links);
    changeBackgroundColor(link.dataset.color);
    link.setAttribute('active', true);
    changeColorLink(link, link.dataset.color);
  });
});
