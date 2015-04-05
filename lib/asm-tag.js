'use strict'

module.exports = asmTag

const jit = require('jit.js')
const pasm = require('pasm')

function asmTag(strings) {
  const values = [].slice.call(arguments, 1)
  const output = [strings[0]]
  let i = 1
  while(values.length) {
    output.push(values.shift())
    output.push(strings[i++])
  }
  return asmParse(output.join(''))
}

function asmParse(str) {
  let instructions = pasm.parse(str)
  return jit.compile(function() {
    this.Proc(function() {
      for (let i = 0; i < instructions.data.length; i += 2) {
        this.emitb(parseInt(instructions.data[i] + instructions.data[i + 1], '16'))
      }
      this.Return()
    })
  })
}

