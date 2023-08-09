let continer_4_box_1 = document.querySelector(".container-4-box-1");
let continer_4_box_2 = document.querySelector(".container-4-box-2");
let continer_4_box_3 = document.querySelector(".container-4-box-3");


continer_4_box_1.addEventListener("mouseenter", function () {
  continer_4_box_1.style.transform = "translateY(-2%)";
  continer_4_box_1.style.transition = "0.3s";
});
continer_4_box_1.addEventListener("mouseleave", function () {
  continer_4_box_1.style.transform = "translateY(0%)";
  continer_4_box_1.style.transition = "0.3s";
});

continer_4_box_2.addEventListener("mouseenter", function () {
  continer_4_box_2.style.transform = "translateY(-2%)";
  continer_4_box_2.style.transition = "0.3s";
});
continer_4_box_2.addEventListener("mouseleave", function () {
  continer_4_box_2.style.transform = "translateY(0%)";
  continer_4_box_2.style.transition = "0.3s";
});

continer_4_box_3.addEventListener("mouseenter", function () {
    continer_4_box_3.style.transform = "translateY(-2%)"
    continer_4_box_3.style.transition=".3s"
})
continer_4_box_3.addEventListener("mouseleave", function () {
  continer_4_box_3.style.transform = "translateY(0%)";
  continer_4_box_3.style.transition = "0.3s";
});


let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon22");

let nav_links_popup = document.querySelector("#nav-links-popup");

icon1.addEventListener("click", function () {
  nav_links_popup.style.display = "initial"
  icon2.style.display = "initial"
  icon1.style.display="none"
})
icon2.addEventListener("click", function () {
  nav_links_popup.style.display = "none";
  icon1.style.display = "initial";
  icon2.style.display = "none";
});