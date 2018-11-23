/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * Window Mock
 * @ignore
 * @global
 * @returns {object}
 */
const windowMock = {
  screen: {
    orientation: undefined,
  },
  addEventListener: () => void(0), // eslint-disable-line
};

export default windowMock;
