/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

/**
 * @name screenOrientation
 * @desc Required to track orientation change on mobile devices
 * @example {@lang javascript} landscape, portrait
 * @global
 * @const
 */
const screenOrientation = { landscape: 'landscape', portrait: 'portrait' };

/**
 * @name defaultBreakpoints
 * @desc Removed from the great work of `Bootstrap 4`.
 * All values are defined in pixels (without the suffix `px`),
 * to be further converted to `em` unit.
 * @see {@link https://getbootstrap.com/docs/4.0/layout/grid/}
 * @example {@lang javascript}
 * {
 *  xs: 0
 *  sm: 576
 *  md: 768
 *  lg: 992
 *  xl: 1200
 * }
 * @global
 * @const
 */
const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/**
 * @name mediaTypes
 * @desc Target all, one or more specific device
 * @example {@lang javascript}
 * all | aural | braille | handheld | print |
 * projection | screen | tty | tv | embossed
 * @global
 * @const
 */
const mediaTypes = {
  all: 'all',
  aural: 'aural',
  braille: 'braille',
  handheld: 'handheld',
  print: 'print',
  projection: 'projection',
  screen: 'screen',
  tty: 'tty',
  tv: 'tv',
  embossed: 'embossed',
};

/**
 * @name mediaFeature
 * @desc Used to set <Expression> syntax
 * expression: ( <media_feature> [: <value>]? )
 * @example {@lang javascript}
 * width | min-width | max-width
 * height | min-height | max-height
 * device-width | min-device-width | max-device-width
 * device-height | min-device-height | max-device-height
 * aspect-ratio | min-aspect-ratio | max-aspect-ratio
 * device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
 * color | min-color | max-color
 * color-index | min-color-index | max-color-index
 * monochrome | min-monochrome | max-monochrome
 * resolution | min-resolution | max-resolution
 * | scan | grid
 * @global
 * @const
 */
const mediaFeature = {
  width: 'width',
  minWidth: 'min-width',
  maxWidth: 'max-width',
  height: 'height',
  minHeight: 'min-height',
  maxHeight: 'max-height',
  deviceWidth: 'device-width',
  minDeviceWidth: 'min-device-width',
  maxDeviceWidth: 'max-device-width',
  deviceHeight: 'device-height',
  minDeviceHeight: 'min-device-height',
  maxDeviceHeight: 'max-device-height',
  aspectRatio: 'aspect-ratio',
  minAspectRatio: 'min-aspect-ratio',
  maxAspectRatio: 'max-aspect-ratio',
  deviceAspectRatio: 'device-aspect-ratio',
  minDeviceAspectRatio: 'min-device-aspect-ratio',
  maxDeviceAspectRatio: 'max-device-aspect-ratio',
  color: 'color',
  minColor: 'min-color',
  maxColor: 'max-color',
  colorIndex: 'color-index',
  minColorIndex: 'min-color-index',
  maxColorIndex: 'max-color-index',
  monochrome: 'monochrome',
  minMonochrome: 'min-monochrome',
  maxMonochrome: 'max-monochrome',
  resolution: 'resolution',
  minResolution: 'min-resolution',
  maxResolution: 'max-resolution',
  scan: 'scan',
  grid: 'grid',
};

/**
 * @name logicalOperator
 * @desc Used to join <expression> in the <media_query>
 * expression: ( <media_feature> [: <value>]? )
 * media_query: <expression> [ and <expression> ]*
 * @example {@lang javascript}
 * and
 * or
 * @global
 * @const
 */
const logicalOperator = {
  and: 'and',
  or: ',',
};

/**
 * @name initialLogicalOperator
 * @desc Used in the first condition of the <media_query>
 * media_query: [[only | not]? <media_type> [ and <expression> ]*]
 * @example {@lang javascript}
 * not
 * only
 * @global
 * @const
 */
const initialLogicalOperator = {
  not: 'not',
  only: 'only',
};

export {
  screenOrientation,
  defaultBreakpoints,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
};
