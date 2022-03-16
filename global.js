function rainbow() {
  let red = $("#red").val(); //query value from slider
  let green = $("#green").val();
  let blue = $("#blue").val();
  $("body").css("background-color", `rgb(${red},${green},${blue})`); //set css according to sliders
}

let i = 0; //RGB value index
let loop = 0; //loop index

function index() {
  if (i == 255) {
    i = 0; //reset value index
    if (loop == 6) {
      loop = 1; //reset loop index
    } else {
      loop++;
    }
  } else {
    i++;
  }

  switch (loop) {
    case 0: case 5:
      $("#red").val(i)
      break;
  
    // case red == 255 && green == 0 && blue == 0:
    case 1:
      $("#green").val(i);
      break;
  
    // case red == 255 && green == 255 && blue == 0:
    case 2:
      $("#red").val(255-i);
      break;
  
    // case red == 0 && green == 255 && blue == 0:
    case 3:
      $("#blue").val(i);
      break;
  
    // case red == 0 && green == 255 && blue == 255:
    case 4:
      $("#green").val(255-i);
      break;
  
    // case red == 255 && green == 0 && blue == 255:
    case 6:
      $("#blue").val(255-i);
      break;
  }
  rainbow()
}

let interval
$("#effect").change(function () {
  i = 0;
  loop = 0;

  let red = 0;
  $("#red").val(red);
  let green = 0;
  $("#green").val(green);
  let blue = 0;
  $("#blue").val(blue);
  rainbow()
  if (this.checked) {
    interval = setInterval(index, 5);
  } else {
    clearInterval(interval);
  }
});

console.log(i)