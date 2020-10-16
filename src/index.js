module.exports = function toReadable (number) {

    let result = ''; 

    let ones=['','one','two','three','four','five','six','seven','eight','nine'];
    let tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    if (number.toString().length === 1) {
        result = ones[number.toString()[0]];
    }

    if (number === 0) return 'zero';
    
    if (number.toString().length === 2) {
      if (number < 20) {
        result = teens[number.toString()[1]];
      } else if (number.toString()[1] === '0') {
        result = tens[number.toString()[0]];
      } else {
     result = tens[number.toString()[0]] + ' ' + ones[number.toString()[1]];
      }
    }
    
    if (number.toString().length === 3) {
        if (number.toString().slice(1,3) === '00') { 
            result = ones[number.toString()[0]] + ' hundred';
        } else if ((number.toString()[2] === '0') && (Number(number.toString().slice(1,3)))!==10) {
            result = ones[number.toString()[0]] + ' hundred ' + tens[number.toString()[1]]; 
        } else if ((Number(number.toString().slice(1,3)))<20 && (Number(number.toString().slice(1,3)))>=10) {
          result = ones[number.toString()[0]] + ' hundred ' + teens[number.toString()[2]];
        } else if (Number(number.toString().slice(1,3))<10) {
          result = ones[number.toString()[0]] + ' hundred' + tens[number.toString()[1]] + ' ' + ones[number.toString()[2]];
        } else {
        result = ones[number.toString()[0]] + ' hundred ' + tens[number.toString()[1]] + ' ' + ones[number.toString()[2]];
        }
    }

    
      return result;
    }
