// either: a or b
interface IEither<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements IEither<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}
const either: IEither<number, number> = new SimpleEither(4, 5);
either.left(); // 4
console.log(either.left());
either.right(); //5
console.log(either.right());
const best = new SimpleEither({name: 'ellie'}, 'hello');

console.log(best.left());
console.log(best.right());