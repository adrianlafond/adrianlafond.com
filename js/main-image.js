
function mainImage() {
  var margin = 20;
  var featureEl = document.querySelector('.main-image__feature');

  function onResize() {
    var size = Math.min(window.innerWidth - margin, window.innerHeight - margin, 800);
    featureEl.style.width = featureEl.style.height = size + 'px';
  }

  window.addEventListener('resize', onResize);
  onResize();
}
mainImage();
