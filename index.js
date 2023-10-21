// Write your solution in this file!
// Step 1: Initialize the employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  // Step 2: Create the four functions
  
  // 1. updateEmployeeWithKeyAndValue()
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,

    };
    l\
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue()
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey()
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey()
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employe;
  }