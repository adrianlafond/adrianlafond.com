"use strict";

function mainImage() {
  var margin = 20;
  var featureEl = document.querySelector('.main-image__feature');

  function onResize() {
    var width = Math.min(window.innerWidth - margin, imgWidth);
    var height = Math.min(window.innerHeight - margin, imgHeight);
    var ratioWidth = width / imgWidth;
    var ratioHeight = height / imgHeight;

    if (ratioWidth < ratioHeight) {
      height = imgHeight * ratioWidth;
    } else if (ratioWidth > ratioHeight) {
      width = imgWidth * ratioHeight;
    }

    featureEl.style.width = "".concat(width, "px");
    featureEl.style.height = "".concat(height, "px");
  }

  window.addEventListener('resize', onResize);
  onResize();
}

mainImage();