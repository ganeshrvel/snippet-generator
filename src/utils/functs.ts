export const undefinedOrNull = <T>(
  variable: T | null | undefined
): variable is null | undefined => {
  return typeof variable === 'undefined' || variable === null;
};
