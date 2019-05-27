// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyInput = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyResult = any;

export type UserFunction<T> = (...any: AnyInput[]) => T;

export type Placeholder = (() => void) & { isPlaceholder: true };

// # Arity https://en.wikipedia.org/wiki/Arity
export type NAry<N> = (...inputs: AnyInput[N]) => AnyResult;
export type Nullary = NAry<0>;
export type Unary = NAry<1>;
export type Binary = NAry<2>;
export type Ternary = NAry<3>;
export type Quaternary = NAry<4>;
export type Quinary = NAry<5>;
export type Senary = NAry<6>;
export type Septenary = NAry<7>;
export type Octonary = NAry<8>;
export type Novenary = NAry<9>;
export type Denary = NAry<10>;
export type Polyadic = (a: AnyInput, b: AnyInput, ...any: AnyInput[]) => AnyResult;
export type Multary = Polyadic;

export namespace Curry {
  namespace Callback {
    type Arguments = AnyInput[];
    type Result = AnyResult;
  }

  type Callback = (...args: Callback.Arguments) => Callback.Result;

  namespace Curried {
    type Arguments = (Placeholder | AnyInput)[];
  }
  type Curried = (...args: Curried.Arguments) => Callback.Result | Curried;
}

export namespace Pipe {
  namespace HeadFunction {
    type Arguments<C> = AnyInput[C];
  }
  type HeadFunction<C> = NAry<C>;

  namespace BodyFunction {
    type Arguments = AnyInput;
    type Result = AnyResult;
  }
  type BodyFunction = Unary;
  type BodyFunctions = BodyFunction[];

  namespace LastFunction {
    type Result<T> = T;
  }

  type PipedFunction<T, C> = (...args: HeadFunction.Arguments<C>) => LastFunction.Result<T>
}
