let el = document.getElementById("cPage");

el.addEventListener("mousemove", handleMove);

const height = el.clientHeight;
const width = el.clientWidth;
function handleMove(e) {
  const xVal = e.layerX;
  const yVal = e.layerY;

  const yRotation = 20 * ((xVal - width / 2) / width);
  const xRotation = -30 * ((yVal - height / 2) / height);

  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";
  el.style.transform = string;
}

el.addEventListener("mouseout", function () {
  el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
});

el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
});

el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) rotateX(0) rotateY(0)";
});

const labels = document.querySelectorAll("form label");
const inputs = document.querySelectorAll("form input");

labels.forEach((label) => {
  label.addEventListener("click", (e) => {
    e.currentTarget.previousElementSibling.focus();
  });
});
