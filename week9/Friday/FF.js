// Factory Function

function dateFactory() {
  const date = new Date();
  return {
    getHour: date.getHours(),
    getMins: date.getMinutes(),
    getSeconds: date.getSeconds(),
    getDate: date.getDate(),
  };
}

function elementFactory(type, text, color, src) {
  const element = document.createElement(type);
  element.innerHTML = text;
  if (type === "img") {
    element.src = src;
  }
  element.style.color = color;

  return {
    element,
    color,
    text,
    changeColor() {
      this.element.style.color = color;
    },
    changeText() {
      this.element.innerHTML = text;
    },
  };
}

console.log(
  elementFactory("h1", "Hi My name is Slim Shaddy", "red", "json.png")
);
