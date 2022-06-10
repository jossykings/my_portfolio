const see = document.querySelector("#hero");
const Option = {};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target.id);
  });
}, Option);

observer.observe(see);
