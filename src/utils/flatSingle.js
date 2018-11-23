/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * flatSingle
 * @description flat single level array
 * @example {@lang javascript}
 * const result = flatSingle([1, 2, [3, 4]]);
 * console.log(result) // outputs: [1, 2, 3, 4]
 * @ignore
 * @global
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#Alternative|Mozila Array.prototype.flat()}
 * @function flatSingle
 * @param {any[]} arr
 * @return {any[]}
 */
const flatSingle = arr => [].concat(...arr);

export default flatSingle;
