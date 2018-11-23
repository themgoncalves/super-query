/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * removeEmptyEntries
 * @description remove empty entries from array
 * @example {@lang javascript}
 * const result = removeEmptyEntries([1, '', 'a', null]);
 * console.log(result) // outputs: [1, 'a']
 * @ignore
 * @global
 * @function removeEmptyEntries
 * @param {any[]} arr
 * @return {any[]}
 */
const removeEmptyEntries = arr => arr.filter(item => item && item.trim());

export default removeEmptyEntries;
