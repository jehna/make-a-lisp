const SYMBOL_KEY = Symbol('__symbol_key')

module.exports = {
  create: val => ({ [SYMBOL_KEY]: val }),
  getValue: symbol => symbol[SYMBOL_KEY],
  isSymbol: obj => obj.hasOwnProperty(SYMBOL_KEY)
}