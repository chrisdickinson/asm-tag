'use strict'

const asm = require('./lib/asm-tag.js')

const fn = asm`
  [bits 64]
  mov rbx, [rbp-16]
  add rax, rbx
`

console.log(fn(203, 14))
