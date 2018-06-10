/**
 * SuperQuery
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 0.1.0
 */

/**
 * Screen Orientation
 * Required to track orientation change on mobile devices
 */
const screenOrientation = { landscape: 'landscape', portrait: 'portrait' };


/**
 * Default Breakpoints
 * Removed from the great work of `Bootstrap 4`
 * @see {@link https://getbootstrap.com/docs/4.0/layout/grid/}
 */
const defaultBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

/**
 * Media Types
 * Target all, one or more specific device
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
 * Media Feature
 * Used to set <Expression> syntax
 * expression: ( <media_feature> [: <value>]? )
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
 * Logical Operator
 * Used to join <expression> in the <media_query>
 *  media_query: <expression> [ and <expression> ]*
 */
const logicalOperator = {
  and: 'and',
  or: ',',
};

/**
 * Initial Logical Operator
 * Used in the first condition of the <media_query>
 * media_query: [[only | not]? <media_type> [ and <expression> ]*]
 */
const initialLogicalOperator = {
  not: 'not',
  only: 'only',
};

// Exports the objects
export {
  screenOrientation,
  defaultBreakpoints,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
};
