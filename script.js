//containers
const contactMenu = document.querySelector(".contactMenu");
const contactList = document.querySelectorAll(".contactlist");
const main = document.querySelector(".main");
const logo = document.querySelector(".logo");
const navBarList = document.querySelector(".navbarlist");
const joinNowSection = document.querySelector(".joinnowsection");
const container = document.querySelector(".container");
//buttons
const joinNowButton = document.querySelector(".joinnow");
const contactButton = document.getElementById("contactButton");
const carrierButton = document.getElementById("carrierButton");
const exitContactButton = document.querySelector(".exitcontact");
const exitJoinSection = document.querySelector(".exitjoinsection");
//tlmax on start
const tl = new TimelineMax();
tl.to(main, 2, { opacity: 1 });
tl.to(logo, 1, { x: 0 });
tl.to(navBarList, 1.4, { x: 0 });
//listeners
exitJoinSection.addEventListener("click", closeJoinSection);
contactButton.addEventListener("click", openContact);
exitContactButton.addEventListener("click", closeContact);
joinNowButton.addEventListener("click", openJoinSection);
//functions
function openContact() {
  tl.to(contactMenu, 0.5, { y: 0 });
  tl.fromTo(contactList, 0.5, { opacity: 0 }, { opacity: 1 });
}
function closeContact() {
  tl.to(contactMenu, 0.5, { y: -200 });
}
function openJoinSection() {
  tl.to(container, 0.5, { opacity: 0 });
  tl.to(joinNowSection, 0.5, { x: 0 });
}
function closeJoinSection() {
  tl.to(joinNowSection, 0.5, { x: -1500 });
  tl.to(container, 0.5, { opacity: 1 });
}
