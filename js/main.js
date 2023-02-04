const sections = document.querySelectorAll(".home");
const title = document.querySelector(".car_model_title");
const paragraph = document.querySelector(".car_model_paragraph");
const link = document.querySelector(".car_model_link");
const left_btn = document.querySelector(".home_button_order");
const right_btn = document.querySelector(".home_button_exist");

let page = new Page(sections, title, paragraph, link, left_btn, right_btn);
createOberver(sections);

function createOberver(elements) {
  let options = {
    root: null,
    threshold: 0.5, //(臨界點)進入頁面的一半
    rootMargin: "0px", //觀察範圍
  };

  //所有的變換都是透過IntersectionObserver這個API去實現
  const observer = new IntersectionObserver(handleIntersect, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let current_id = entry.target.id;

      switch (current_id) {
        case "model_s":
          page.title = "Model S";
          page.paragraph = "Order Online for ";
          page.link = "Touchless Delivery";
          page.left_btn = "Custom Order";
          page.right_btn = "Existing Inventory";
          break;
        case "model_y":
          page.title = "Model Y";
          page.left_btn = "Custom Order";
          page.right_btn = "Existing Inventory";
          break;
        case "model_3":
          page.title = "Model 3";
          page.left_btn = "Order Now";
          page.right_btn = "Learn More";
          break;
        case "model_x":
          page.title = "Model X";
          page.paragraph = "Order Online for ";
          page.link = "Touchless Delivery";
          page.left_btn = "Custom Order";
          page.right_btn = "Existing Inventory";
          break;
        case "solar_panels":
          page.title = "Solar Panels";
          page.paragraph = "Lowest Cost Solar Panels in America";
          page.link = "";
          page.left_btn = "Order Now";
          page.right_btn = "Learn More";
          break;
        case "solar_roof":
          page.title = "Solar Roof";
          page.paragraph = "Produce Clean Energy From Your Roof";
          page.left_btn = "Order Now";
          page.right_btn = "Learn More";
          break;
        default:
          break;
      }

      title.innerHTML = page.title;

      //因為用innerHTML會影響CSS，所以使用childNodes+textContent來改變更換畫面後的文字
      paragraph.childNodes[0].textContent = page.paragraph;
      link.childNodes[0].textContent = page.link;
      left_btn.childNodes[1].textContent = page.left_btn;
      right_btn.childNodes[1].textContent = page.right_btn;
    }
  });
}
const main = document.querySelector("main");

main.addEventListener("scroll", (e) => {
  let viewHeight = main.offsetHeight;
  let currentOffset = main.scrollTop % viewHeight;

  let opacityValue = Math.abs(1 - currentOffset / (viewHeight / 2));

  title.style.opacity = opacityValue;
  paragraph.style.opacity = opacityValue;
  link.style.opacity = opacityValue;
  left_btn.style.opacity = opacityValue;
  right_btn.style.opacity = opacityValue;
});
