function divisibleByLeft(n) {

    const array = n.toString().split('');
  
    return array.map((el, i) => {
        
          if (i === 0) return false
        
          return el % parseInt(array[i-1]) === 0
    });
  
  }
  
  
  module.exports = divisibleByLeft;