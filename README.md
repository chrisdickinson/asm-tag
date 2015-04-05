# asm-tag

A toy ES6 template tag to take assembler and compile it into an executable function.
All credit goes to [Fedor Indutny](https://twitter.com/indutny) and [Tommi Pisto](https://twitter.com/tpisto) for
[jit.js](https://github.com/js-js/jit.js) and [pasm](https://github.com/tpisto/pasm), respectively.

```javascript
'use strict'

const asm = require('./lib/asm-tag.js')

const fn = asm`
  [bits 64]
  mov rbx, [rbp-16]
  add rax, rbx
`

console.log(fn(203, 14))  // 217, if everything went according to plan!
```

## License

MIT
