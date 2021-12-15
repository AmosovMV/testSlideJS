let imageArray = [
  {
    url: './image/image_1.png',
    title: "Рис1"
  },
  {
    url: './image/image_2.png',
    title: "Рис2"
  },
  {
    url: './image/image_3.png',
    title: "Рис2"
  },
];


function initImageSlider() {
  let slider_img = document.querySelector(".project-image-select");
  let point_select_left = document.querySelector('.select-left');
  let point_select_right = document.querySelector('.select-right');
  let line_select_left = document.querySelector('.line-select-left');
  let line_select_right = document.querySelector('.line-select-right');
  let dotsSelect = document.querySelector('.dot-select');
  let linkSelect = document.getElementsByClassName('select-items_link');


  function initImage() {
    imageArray.forEach(function (item, index) {
      let imgDiv = `<div class="img${index} image ${index === 0 ? "currentImg" : ""}" style=background-image:url(${imageArray[index].url}) data-index=${index}></div>`;
      slider_img.innerHTML += imgDiv;
    })
  };

  initImage();

  function initSelect() {
    let currentIndex = +slider_img.querySelector(".currentImg").dataset.index;
    let nextIndex = 0;
    point_select_right.addEventListener('click', function () {
      nextIndex === imageArray.length - 1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    })
    point_select_left.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length - 1 : nextIndex -= 1;
      moveCurrentImg(nextIndex);
    })
    ///////////////////////////////////////
    line_select_right.addEventListener('click', function () {
      nextIndex === imageArray.length - 1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    });

    line_select_left.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length - 1 : nextIndex -= 1;
      moveCurrentImg(nextIndex);
    })
  }

  initSelect();

  function moveCurrentImg(numb) {
    slider_img.querySelector('.currentImg').classList.remove("currentImg");
    slider_img.querySelector('.img' + numb).classList.add("currentImg");
    dotsSelect.querySelector('.active').classList.remove('active');
    dotsSelect.querySelector('.point' + numb).classList.add('active');
    document.querySelector('.link.active').classList.remove('active');
    //linkSelect.querySelector('.active').classList.remove('active');
    linkSelect[`${numb}`].className = 'select-items_link link active';
  };

  function initPoint() {
    imageArray.forEach((image, index) => {
      let dot = document.createElement('div');
      dot.className = `point point${index} ${index === 0 ? "active" : ""}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function () {
        moveCurrentImg(this.dataset.index);
      });
      dotsSelect.appendChild(dot);
    });
  };

  initPoint();

  function initLink() {
    imageArray.forEach((image, index) => {
      linkSelect[index].className = `select-items_link link ${index === 0 ? "active" : ""}`
      let linkIndex = index;
      linkSelect[index].onclick = function () {
        moveCurrentImg(linkIndex);
      };
    });
    //console.log(linkSelect);
    console.log(document.getElementsByClassName('link active'));
    //document.getElementsByClassName('link active').classList.remove('active');
    //document.querySelector('.link.active').classList.remove('active');
  };

  initLink();

};

document.addEventListener("DOMContentLoaded", initImageSlider);