function copyProperties(originalObj, copyObj) {
  let propertyCount = Object.keys(originalObj).length;

  for (let property in originalObj) {
    copyObj[property] = originalObj[property];
  }

  return propertyCount;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }