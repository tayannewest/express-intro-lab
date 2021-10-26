const squids = [
  {species: 'Bobtail', isSquid: true, size: 'tiny'},
  {species: 'Giant', isSquid: true, size: 'giant'},
  {species: 'Flying', isSquid: true, size: 'smallish'},
]

const find = (conditions, callback) => {
  try {
    // try the code here
    if (!(conditions instanceof Object)) {
      throw new TypeError('Please pass in an object')
    }
    // if the object is empty, return all the squids
    if (Object.keys(conditions).length === 0) {
      return callback(null, squids)
    }


  } catch (error) {
    // if there are errors, run this code
    console.log(error)
    callback(error, [])
  }
}

export{
  find
}
