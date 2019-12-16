let pictures = ["img/kerst-lang1.jpg", "img/kerst1.jpg", "img/kerst2.jpg", "img/kerst3.jpg", "img/kerst4.jpg", "img/kerst5.jpg", "img/kerst6.jpg", "img/kerst7.jpg", "img/kerst8.jpg", "img/kerst-lang2.jpg"];
let container = document.getElementById( 'container' );

// let container = document.getElementById("container");
//
for(let x = 0; x < pictures.length; x++){
  container.innerHTML += '<img src=' + pictures[x] + ' />'
}
