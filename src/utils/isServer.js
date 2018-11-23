/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * Check if the current request is from a server side.
 * @function isServer
 * @ignore
 * @global
 * @returns {boolean}
 */
export default function isServer() {
  return !(typeof window !== 'undefined' && window.document);
}
