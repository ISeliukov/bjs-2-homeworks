function compareArrays(arr1, arr2) {
let res = false;

    res = arr1.every(function(element, index) {
        return element === arr2[index]; 
    });

    return (arr1.length == arr2.length) && res;
}

function getUsersNamesInAgeRange(users, gender) {
  
let mas = users.filter(item => item.gender === gender).map(item => item.age);
let res = mas.reduce((sum, age) => sum + age, 0);

return (mas.length > 0) ? res / mas.length : 0;

}
