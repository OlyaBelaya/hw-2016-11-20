let obj = {
  num: 1.24,
  str: "not very long string",
  f() {
    return this.str.split(" ");
  },
  arr: ["some", "array", {someProp: "value"}],
  prop: { key: 1 },
  empty: null,
  last: 0
};


let counter = 0;
function mod(currentObj){
  
  let arrPropTypes = [];
  let arrPropNames  = [];
for (key in currentObj){
  counter++;
  arrPropTypes.push(typeof(currentObj[key]));
  arrPropNames.push(key);

  
if (typeof(currentObj[key])=== "number") {currentObj[key] = currentObj[key].toFixed(2);
  console.log(currentObj[key]);}
  
if (typeof(currentObj[key])=== "string") {currentObj[key] = currentObj[key].toUpperCase();
  console.log(currentObj[key]);}
  
 
}
  let objMod = {
    propNames: arrPropNames,
    propTypes: arrPropTypes,
    "количество собственных свойств": counter
  };
  
  Object.preventExtensions(currentObj);
   return objMod;

}

let newObj = mod(obj);

console.log("Object isExtensible - " + Object.isExtensible(obj));

console.log(newObj);
