const fooddata = require('./food.json');
//console.log(fooddata);


listedFood = fooddata.map((food) => food.foodname);
//console.log(listedFood);

cate = "Vegetable"; //getting category from users 
filteredFood = fooddata.filter(food => (food.category === cate));
//console.log(filteredFood); 

calorieAbove100 = fooddata.filter(food => (food.calorie>100)).map((food) => food.foodname);
//console.log(calorieAbove100); 

calorieBelow100 = fooddata.filter(food => (food.calorie<100)).map((food) => food.foodname);
//console.log(calorieBelow100);

hightolowPro = fooddata.sort((x, y) => (y.protiens - x.protiens));
//console.log(hightolowPro);

lowtohighCarb = fooddata.sort((x, y) => (x.cab - y.cab));
//console.log(lowtohighCarb);