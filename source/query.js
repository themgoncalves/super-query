/**
 * SuperQuery
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 0.1.0
 */

import { css } from 'styled-components';

import {
  screenOrientation,
  defaultBreakpoints,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
} from './types';

/**
 * Set the initial media breakpoints
* @global
*/
let mediaBreakpoints = defaultBreakpoints;

/**
 * configureBreakpoints
 * @function
 * @param {Object} customBreakpoints - The custom breakpoints object to overwrite the default condition.
 */
const configureBreakpoints = customBreakpoints => { mediaBreakpoints = customBreakpoints };
/**
 * mediaQuery
 * @function
 * @returns {Object} - The conditions to use and set the media query.
 */
/* eslint-disable no-use-before-define */
const mediaQuery = () => {
  // Media query string
  // It's used to mount the `media query` statement after every object call
  let query = '@media ';

  /**
   * Returns the `media query` set
   * @function
   * @returns {String} - The media query string.
   */
  const ToString = () => String(query).replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' '); // eslint-disable-line no-unused-vars

  /**
   * Render CSS
   * @function
   * @params {String} - ES6 Tagged Template Literals containing your CSS syntax
   * @see {@link https://www.styled-components.com/docs/advanced#tagged-template-literals}
   */
  const renderCss = (...args) => css`
    ${query.toString().trim()} {
      ${css(...args)}
    }
  `;

  /**
   * Breakpoint Selector
   * @example
   * SuperQuery().minWidth().md()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const breakpointsSelector = Object.keys(mediaBreakpoints).reduce((accumulator, label) => {
    const emUnit = mediaBreakpoints[label] / 16;
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `${emUnit}em) `;
      return ({
        ...logicalOperatorSelector,
        ...{ css: renderCss, ToString },
      });
    };
    return accumulator;
  }, {});


  /**
   * Screen Orientation Selector
   * @example
   * SuperQuery().all().and().portrait()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const screenOrientationSelector = Object.keys(screenOrientation).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `(orientation: ${screenOrientation[label]}) `;
      return ({ ...logicalOperatorSelector, ...{ css: renderCss, ToString } });
    };
    return accumulator;
  }, {});

  /**
   * Initial Logical Operator Selector
   * @example
   * SuperQuery().only()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const initialLogicalOperatorSelector = Object.keys(initialLogicalOperator)
    .reduce((accumulator, label) => {
      accumulator[label] = () => { // eslint-disable-line no-param-reassign
        query += `${initialLogicalOperator[label]} `;
        return ({ ...mediaTypeSelector, ...{ ToString: ToString } });
      };
      return accumulator;
    }, {});


  /**
   * Logical Operator Selector
   * @example
   * SuperQuery().screen().and()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const logicalOperatorSelector = Object.keys(logicalOperator).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query = (logicalOperator[label] === logicalOperator.or ?
        `${ToString()}${logicalOperator[label]} ` :
        `${query} ${logicalOperator[label]} `);

      return ({
        ...mediaTypeSelector,
        ...mediaFeatureSelector,
        ...screenOrientationSelector,
        ...{ ToString },
      });
    };
    return accumulator;
  }, {});

  /**
   * Media Type Selector
   * @example
   * SuperQuery().print()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const mediaTypeSelector = Object.keys(mediaTypes).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `${mediaTypes[label]} `;
      return ({ ...logicalOperatorSelector, ...mediaFeatureSelector, ...{ ToString } });
    };
    return accumulator;
  }, {});


  /**
   * Media Feature Selector
   * @example
   * SuperQuery().width()
   * SuperQuery().width('120px')
   * @params {String} - Optional value to the Media Feature
   * @returns {Object} - With Proper Selectors that match current condition
   */
  const mediaFeatureSelector = Object.keys(mediaFeature).reduce((accumulator, label) => {
    accumulator[label] = (value = '') => { // eslint-disable-line no-param-reassign
      query += `(${mediaFeature[label]}: ${!value ? '' : value + ') '}`; // eslint-disable-line prefer-template
      return ({
        ...logicalOperatorSelector,
        ...breakpointsSelector,
        ...{ css: renderCss, ToString },
      });
    };
    return accumulator;
  }, {});

  /**
   * SuperQuery
   * Initial Selector Object
   * @example
   * SuperQuery().all()
   * SuperQuery().only()
   * SuperQuery().print()
   * SuperQuery().width()
   * @returns {Object} - With Proper Selectors that match current condition
   */
  return ({
    ...initialLogicalOperatorSelector,
    ...mediaTypeSelector,
    ...mediaFeatureSelector,
    ...{ ToString },
  });
};
/* eslint-enable no-use-before-define */

/**
*  Exports default the mediaQuery
*  Export { configureBreakpoints }
*/
export default mediaQuery;
export {
  configureBreakpoints,
}
