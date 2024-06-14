function getTimeFactory() {
  const date = new Date();

  return {
    getHours: () => date.getHours(),
    getMinutes: () => date.getMinutes(),
    getSeconds: () => date.getSeconds(),
    getStringTime: () =>
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
  };
}

const timeFactory = getTimeFactory();
console.log(timeFactory.getStringTime()); // 12:30:45
console.log(timeFactory.getHours()); // 12
console.log(timeFactory.getMinutes()); // 30
console.log(timeFactory.getSeconds()); // 45
// What is the output of the following code?
