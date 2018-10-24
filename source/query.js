/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 1.0.0
 */

import { css } from 'styled-components';
import { defaultBreakpoints } from './types';
import {
  screenOrientation,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
} from './types';


/**
 * @function SuperQuery
 * @module SuperQuery
 * @desc A media-query for styled-component
 * @example <caption>Example of use together with `styled-components`</caption> {@lang javascript}
 * const Title = styled.h1`
 *   color: #666;
 *   font-size: 16px;
 *   ${SuperQuery().minWidth().lg().css`
 *     font-size: 20px;
 *   `};
 *   ${SuperQuery().minWidth().lg().and().landscape().css`
 *     font-size: 26px;
 *   `};
 * `;
 * @see initialLogicalOperator
 * @see mediaTypes
 * @see mediaFeature
 * @returns {Object} - With Proper Selectors that match current condition
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 1.0.0
 * @license MIT
 * @requires styled-components
 */
/* eslint-disable no-use-before-define */
const mediaQuery = (mediaBreakpoints = defaultBreakpoints) => {
  // mediaBreakpoints validation
  // we want to make sure that a proper object is passed
  // otherwise, we will reassign it with the default breakpoints
  if (!(mediaBreakpoints instanceof Object) || !Object.keys(mediaBreakpoints).length) { mediaBreakpoints = defaultBreakpoints }

  // Media query string
  // It's used to mount the `media query` statement after every object call
  let query = '@media ';

  /**
   * Returns the `media query` set
   * @function ToString
   * @returns {String} - The media query string.
   * @ignore
   */
  const ToString = () => String(query).replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' '); // eslint-disable-line no-unused-vars

  /**
   * @function css
   * @desc Render the given css syntax
   * @param {String} - ES6 Tagged Template Literals containing your CSS syntax
   * @see {@link https://www.styled-components.com/docs/advanced#tagged-template-literals}
   * @example {@lang javascript}
   * SuperQuery().all().minWidth().md().css`
   *  background-color: #CCC;
   * `
   */
  const renderCss = (...args) => css`
    ${query.toString().trim()} {
      ${css(...args)}
    }
  `;

  /**
   * @func breakpoints
   * @desc Breakpoint Selector
   * @example {@lang javascript}
   * SuperQuery().minWidth().md()
   * @see defaultBreakpoints
   * @see {@link module:Breakpoints#configureBreakpoints|configureBreakpoints}
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link module:SuperQuery~css|css}
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
   * @function ScreenOrientation
   * @desc Screen Orientation Selector
   * @example {@lang javascript}
   * SuperQuery().all().and().portrait()
   * @see screenOrientation
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link module:SuperQuery~css|css}
   */
  const screenOrientationSelector = Object.keys(screenOrientation).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `(orientation: ${screenOrientation[label]}) `;
      return ({ ...logicalOperatorSelector, ...{ css: renderCss, ToString } });
    };
    return accumulator;
  }, {});

  /**
   * @function InitialLogicalOperator
   * @desc Initial Logical Operator Selector
   * @example {@lang javascript}
   * SuperQuery().only()
   * @see initialLogicalOperator
   * @returns {Object} - Object containing functions of {@link mediaTypes}
   */
  const initialLogicalOperatorSelector = Object.keys(initialLogicalOperator)
    .reduce((accumulator, label) => {
      accumulator[label] = () => { // eslint-disable-line no-param-reassign
        query += `${initialLogicalOperator[label]} `;
        return ({ ...mediaTypeSelector, ...{ ToString } });
      };
      return accumulator;
    }, {});


  /**
   * @function LogicalOperator
   * @desc Logical Operator Selector
   * @example {@lang javascript}
   * SuperQuery().screen().and()
   * @see logicalOperator
   * @returns {Object} - Object containing functions of {@link mediaTypes},
   * {@link mediaFeature} and {@link screenOrientation}.
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
   * @function MediaType
   * @desc Media Type Selector
   * @example {@lang javascript}
   * SuperQuery().print()
   * @see mediaTypes
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link mediaFeature}.
   */
  const mediaTypeSelector = Object.keys(mediaTypes).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `${mediaTypes[label]} `;
      return ({ ...logicalOperatorSelector, ...mediaFeatureSelector, ...{ ToString } });
    };
    return accumulator;
  }, {});


  /**
   * @function MediaFeature
   * @desc Media Feature Selector
   * @example {@lang javascript}
   * SuperQuery().width();
   * SuperQuery().width('120px');
   * SuperQuery().minResolution('300dpi');
   * SuperQuery().deviceAspectRatio('16/9');
   * @see mediaFeature
   * @param {String} - Optional value of the Media Feature
   * @returns {Object} - Object containing functions of {@link logicalOperator},
   * {@link module:Breakpoints#configureBreakpoints|breakpoints} and
   * {@link module:SuperQuery~css|css}.
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
   * @desc SuperQuery
   * Initial Selector Object
   * @example {@lang javascript}
   * SuperQuery().all()
   * SuperQuery().only()
   * SuperQuery().print()
   * SuperQuery().width()
   * @see initialLogicalOperatorSelector
   * @see mediaTypeSelector
   * @see mediaFeatureSelector
   * @returns {Object}
   */
  return ({
    ...initialLogicalOperatorSelector,
    ...mediaTypeSelector,
    ...mediaFeatureSelector,
    ...{ ToString },
  });
};
/* eslint-enable no-use-before-define */


export default mediaQuery;
