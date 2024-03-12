const collectionInput = (collection) => {
  if (Array.isArray(collection)) {
    return collection.slice()
  } else {
    return Object.values(collection)
  }
}

const myEach = (collection, callback) => {
  const newCollection = collectionInput(collection)
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i])
  }
  return collection
}

const myMap = (collection, callback) => {
  const newCollection = collectionInput(collection)
  const newArr = []
  for (let i = 0; i < newCollection.length; i++) {
    newArr.push(callback(newCollection[i]))
  }
  return newArr
}

const myReduce = (collection, callback, acc) => {
  let newCollection = collectionInput(collection)
  if (acc === undefined) {
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
  }
  for (let i = 0; i < newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc
}

const myFind = (collection, predicate) => {
  const newCollection = collectionInput(collection)
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i]
  }
  return undefined
}

const myFilter = (collection, predicate) => {
  const newCollection = collectionInput(collection)
  const newArr = []
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArr.push(newCollection[i])
  }
  return newArr
}

const mySize = (collection) => {
  const newCollection = collectionInput(collection)
  return newCollection.length
}

const myFirst = (array, n) => {
  return n ? array.slice(0, n) : array[0]
}

const myLast = (array, n) => {
  return n ? array.slice(-n) : array[array.length - 1]
}

const myKeys = (object) => {
  const keys = []
  for (let key in object) {
    keys.push(key)
  }
  return keys
}

const myValues = (object) => {
  const values = []
  for (let key in object) {
    values.push(object[key])
  }
  return values
}
