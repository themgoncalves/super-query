import { defaultBreakpoints } from './types';

/**
 * Set the initial media breakpoints
 * @ignore
 * @global
 */
let mediaBreakpoints = defaultBreakpoints; // eslint-disable-line import/no-mutable-exports

/**
 * @module Breakpoints
 */
/**
 * @function configureBreakpoints
 * @desc Overwrite SuperQuery default breakpoints
 * @see defaultBreakpoints
 * @instance
 * @param {Object} customBreakpoints - The custom breakpoints
 * object to overwrite the default condition.
 * @example {@lang javascript}
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
const configureBreakpoints = (customBreakpoints) => { mediaBreakpoints = customBreakpoints; };

export default configureBreakpoints;
export { mediaBreakpoints };
