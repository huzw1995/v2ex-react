export default function throttle(fn: Function, time: number): Function {
  let timer: any;
  timer = null;
  return (...args: any) => {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, time);
    }
  };
}
