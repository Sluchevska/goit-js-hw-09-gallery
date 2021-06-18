import scroll from './mycode'
export default onScrollImages

function onScrollImages(e) {
  let index = originImages.indexOf(lightBoxImg.src);
  if (e.key === 'ArrowRight') {
    if (index < originImages.length - 1) {
      lightBoxImg.setAttribute("src", originImages[index + 1])
    } else {
      index = -1;
      lightBoxImg.setAttribute("src", originImages[index + 1])
      console.log(originImages)
    }
  }
  if (e.key === 'ArrowLeft') {
    if (index === 0) {
      index = originImages.length;
      lightBoxImg.setAttribute("src", originImages[index - 1]);
    }else lightBoxImg.setAttribute("src", originImages[index - 1])
  }
}

