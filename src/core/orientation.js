/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */
import isServer from '../utils/isServer';
import windowMock from '../utils/windowMock';

/**
 * @function Orientantion
 * @module Orientantion
 * @desc A Screen Orientation management
 * @example {@lang javascript}
 * import { Orientation } from '@themgoncalves/super-query';
 * Orientation.onChange((orientation) => {
 *  console.info('Screen orientation changed to: ', orientation);
 * });
 * const isLocked = Orientation.lock('landscape-primary');
 * console.info('Screen orientation has locked to landscape-primary? ', isLocked);
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
 * @returns {Object}
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 * @license MIT
 */
const Orientantion = () => {
  const { screen } = isServer ? windowMock : window;
  const defaultOrientation = 'portrait-primary';
  let isOrientationLocked = false;

  /**
   * @function current
   * @desc Get the current screen orientation
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @example {@lang javascript}
   * const currentOrientation = Orientation.current();
   * console.info(currentOrientation);
   */
  const current = () => {
    const orientation = screen.msOrientation
      || (screen.orientation || screen.mozOrientation || {}).type;

    return (orientation || defaultOrientation);
  };

  /**
   * @function onChange
   * @desc Event listener to track Orientation Changes
   * @param {Function} - Callback function
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/onorientationchange}
   * @returns {String} - New screen orientation
   * @example {@lang javascript}
   * Orientation.onChange((orientation) => {
   *  console.info('Screen orientation has changed to ', orientation);
   * });
   */
  const onChange = (callback) => {
    window.addEventListener('orientationchange', () => {
      callback(current());
    });
  };

  /**
   * @function isLocked
   * @desc Return if the screen orientation has been locked.
   * @returns {Boolean}
   * @example {@lang javascript}
   * const isLocked = Orientation.isLocked();
   * console.info(isLocked);
   */
  const isLocked = () => isOrientationLocked;

  /**
   * @function lock
   * @desc Lock screen orientation
   * @param {(string|string[])} - The orientations to be locked
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation}
   * @returns {Boolean}
   * @example {@lang javascript}
   * const screenWasLocked = Orientation.lock('landscape-primary');
   * console.info(screenWasLocked);
   */
  const lock = (...orientation) => {
    const universalLock = screen.lockOrientation
      || screen.mozLockOrientation
      || screen.msLockOrientation
      || function spOorientation() { return false; };

    isOrientationLocked = universalLock(...orientation);
    return isOrientationLocked;
  };

  /**
   * @function unlock
   * @desc Unlock the screen orientation
   * @returns {Boolean}
   * @example {@lang javascript}
   * const screenWasUnlocked = Orientation.unlock();
   * console.info(screenWasUnlocked);
   */
  const unlock = () => {
    const universalUnlock = screen.unlockOrientation
      || screen.mozUnlockOrientation
      || screen.msUnlockOrientation
      || (screen.orientation && screen.orientation.unlock)
      || function orientation() { return false; };

    isOrientationLocked = universalUnlock();
    return isOrientationLocked;
  };
  /**
   * @desc Orientation
   * Initial Selector Object
   * @example {@lang javascript}
   * Orientation.onChange()
   * Orientation.current()
   * Orientation.lock()
   * Orientation.unlock()
   * Orientation.isLocked()
   * @see onChange
   * @see current
   * @see lock
   * @see unlock
   * @see isLocked
   * @returns {Object}
   */
  return ({
    onChange,
    current,
    lock,
    unlock,
    isLocked,
  });
};

export default Orientantion();
