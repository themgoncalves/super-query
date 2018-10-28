import { defaultBreakpoints } from './types';

/**
 * Set the initial media breakpoints
 * @ignore
 * @global
 */
let mediaBreakpoints = defaultBreakpoints; // eslint-disable-line import/no-mutable-exports

/**
 * @module Breakpoints
 * @deprecated since version 2.0.0
 */
/**
 * @function configureBreakpoints
 * @deprecated since version 2.0.0
 * @desc override SuperQuery default breakpoints
 * @see defaultBreakpoints
 * @instance
 * @param {Object} customBreakpoints - The custom breakpoints
 * object to override the default condition.
 * @example {@lang javascript}
 * // WARNING: This method was deprecated since version 2.0.0
 * // use SuperQuery(myCustomBreakpoints) instead
 *
 *
 * // first we need to import the `configureBreakpoints` function
 * import { configureBreakpoints } from '@themgoncalves/super-query';
 *
 * // here is an example of a custom breakpoint
 * const customBreakpoints = {
 *   extraSmall: 360,
 *   small: 640,
 *   medium: 960,
 *   large: 1024,
 *   extraLarge: 1200,
 *   superExtraLarge: 1600,
 * };
 *
 * // then just import your custom breakpoints into the `configureBreakpoints`
 * // and you are ready to go!
 * configureBreakpoints(customBreakpoints);
 */
const configureBreakpoints = (customBreakpoints) => {
  console.warn('' +
    'DEPRECATED WARNING: configureBreakpoints was deprecated since version 2.0.0. \n\n' +
    'Use SuperQuery(myCustomBreakpoints) instead. \n\n' +
    'See documentation: https://bit.ly/2zaJLrH'
  );
  return mediaBreakpoints = customBreakpoints;
};

export default configureBreakpoints;
export { mediaBreakpoints };
