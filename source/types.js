/**
 * themgoncalves
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 0.1.0
 */

const screenOrientation = { landscape: 'landscape', portrait: 'portrait' };

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

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

const logicalOperator = {
  and: 'and',
  or: ',',
};

const initialLogicalOperator = {
  not: 'not',
  only: 'only',
};

export {
  screenOrientation,
  breakpoints,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
};
