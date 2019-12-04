function prStr(data) {
  if (Array.isArray(data)) {
    return `(${data.map(prStr).join(' ')})`
  }
  if (data === null) {
    return 'Nil'
  }
  switch (typeof data) {
    case 'number':
      return data.toString(10)
    case 'string':
    case 'boolean':
      return data.toString()
    default:
      return data['__symbol_key']
  }
}

module.exports = prStr