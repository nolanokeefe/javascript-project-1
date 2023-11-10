function addImage() {
  let imagesrc = imageForm.imageSrc.value;
  let img = document.createElement('img');
  img.src = imagesrc;
  let container = document.getElementById('image-container');
  container.appendChild(img);
}
