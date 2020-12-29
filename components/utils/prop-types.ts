export const tuple = <T extends string[]>(...args: T) => args;

const buttonTypes = tuple(
  "default",
  "secondary",
  "success",
  "warning",
  "error",
  "abort",
  "secondary-light",
  "success-light",
  "warning-light",
  "error-light"
);

const normalSizes = tuple("mini", "small", "medium", "large");

const normalTypes = tuple(
  "default",
  "secondary",
  "success",
  "warning",
  "error"
);

export type ButtonTypes = typeof buttonTypes[number];

export type NormalSizes = typeof normalSizes[number];

export type NormalTypes = typeof normalTypes[number];
