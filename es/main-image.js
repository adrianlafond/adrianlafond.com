function mainImage() {
  const margin = 20;
  const featureEl = document.querySelector('.main-image__feature');

  function onResize() {
    let width = Math.min(window.innerWidth - margin, imgWidth);
    let height = Math.min(window.innerHeight - margin, imgHeight);
    const ratioWidth = width / imgWidth;
    const ratioHeight = height / imgHeight;
    if (ratioWidth < ratioHeight) {
      height = imgHeight * ratioWidth;
    } else if (ratioWidth > ratioHeight) {
      width = imgWidth * ratioHeight;
    }
    featureEl.style.width = `${width}px`;
    featureEl.style.height = `${height}px`;
  }

  window.addEventListener('resize', onResize);
  onResize();
}
mainImage();
