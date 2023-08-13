const navbar = document.querySelector(".navbar");
const header = document.getElementsByTagName("header")[0];

// window.onscroll = function () {
//   myfnc();
// };
myfnc = function () {
  if (window.scrollY) {
    header.classList.add("sticky");
  } else if (window.scrollY < 60) {
    header.classList.remove("sticky");
  }
};
window.addEventListener("scroll", myfnc);
