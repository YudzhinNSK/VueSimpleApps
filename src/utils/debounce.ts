export function debounce<TFunction extends Function> (fn: TFunction, ms = 1000): TFunction {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  } as unknown as TFunction;
};