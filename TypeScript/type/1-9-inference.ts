
{
  /**
 * Type Inference
 */
let text = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function plus(x: number, y: number): number {
  return x + y;
}
const result = plus(1, 2);
}
