// Write your solution in this file!
let employee = {
    name: "Mia",
};

function updateEmployeeWithKeyAndValue(object, key, value){
    let object2 = { ...object };
    object2[key] = value;
    return object2;
}
console.log(
    updateEmployeeWithKeyAndValue(employee, "streetAddress", "404 Drive")
);

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key]= value;
    return object;
}
console.log(
    destructivelyUpdateEmployeeWithKeyAndValue (employee, "streetAddress", "403 Drive")
);

function deleteFromEmployeeByKey(object, key) {
    let object3 = { ...object };
    delete object3[key];
    return object3;
  }

  console.log(deleteFromEmployeeByKey(employee, "name"));
  function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
  }
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));