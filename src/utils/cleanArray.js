/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * Clean Array
 * @description Removes all kind of spaces from given string
 * @example {@lang javascript}
 * const result = cleanArray(' my string /n other line');
 * console.log(result) // outputs: ' my string other line')
 * @ignore
 * @global
 * @function cleanArray
 * @param {string} string
 * @return {string}
 */
const cleanArray = string => string.toString().replace(/\s+|\n+/g, ' ').trim();

export default cleanArray;
