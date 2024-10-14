import test from "@playwright/test";

export function step(stepDescription?: string) {
  return function boxedStep(target: (...args) => void, context: ClassMethodDecoratorContext) {
    return function replacementMethod(...args: any) {
      const name = stepDescription || this.constructor.name + "." + (context.name as string);
      return test.step(
        name,
        async () => {
          return await target.call(this, ...args);
        },
        { box: true }
      ); // Note the "box" option here.
    };
  };
}
