function arrayOfMultiples (num, length) {
  const arr = []
  let iterator = 1

  while(iterator <= length){
    arr.push(num * iterator)
    iterator++
  }

  return arr
}

module.exports = arrayOfMultiples;