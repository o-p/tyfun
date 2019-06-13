import curry from '../../src/curry.ts'
import reverse from '../../src/reverse.ts'

const sayHello = curry(console.log, 2)('Hello')

sayHello('Deno')

sayHello(
  reverse('nuFyT')
)
