/* eslint global-require: off, prefer-template: off */

/**
 * handle image import into the program.
 * default path: ../public/images/
 * @param filePath
 * @returns {*}
 */
export const imgsrc = (filePath: string) => {
  try {
    // eslint-disable-next-line global-require
    return require('../images/' + filePath);
  } catch (e) {
    return null;
  }
};
