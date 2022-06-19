//Cкриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

const degree = function(a, b) {
for (a =1; a <= 10; a++) {
    let c = b**a;
    console.log(c)
    
  }
}

degree(1, 2)