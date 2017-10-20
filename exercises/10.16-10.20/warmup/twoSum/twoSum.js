

const numSum = (array, sum) => {
  let result = []

  for (let i = 0; i < array.length; i++){
    for (let k = i + 1; k < array.length; k++){
      if (array[k] === sum - array[i]){
        result.push(i, k)
      }
    }
  }
  return result
}


module.exports = numSum
