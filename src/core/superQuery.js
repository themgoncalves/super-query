import { css as renderCss } from 'styled-components';
import {
  defaultBreakpoints,
  screenOrientation,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
} from '../types';

/**
 * @function SuperQuery
 * @module SuperQuery
 * @desc A media-query for styled-component
 * @param {Object} [mediaBreakpoints] Custom breakpoints object to overwrite the default condition.
 * @example <caption>Example of use together with `styled-components`</caption> {@lang javascript}
 * const Title = styled.h1`
 *   color: #666;
 *   font-size: 16px;
 *   // Use with your custom breakpoints directly from `ThemeProvider`
 *   ${props => SuperQuery(props.theme.breakpoints).minWidth.large.css`
 *     font-size: 20px;
 *   `};
 *   // Or directly from an object
 *   ${SuperQuery(myCuystombreakpoints).minWidth.large.css`
 *     font-size: 20px;
 *   `};
 *    // Or use the built-in breakpoints instead
 *   ${SuperQuery().minWidth.lg.and.landscape.css`
 *     font-size: 26px;
 *   `};
 * `;
 * @see initialLogicalOperator
 * @see mediaTypes
 * @see mediaFeature
 * @returns {Object} - With Proper Selectors that match current condition
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 * @license MIT
 * @requires styled-components
 */
/* eslint-disable no-param-reassign, no-console */
export default function SuperQuery(mediaBreakpoints = defaultBreakpoints) {
  // mediaBreakpoints validation
  // we want to make sure that a proper object is passed
  // otherwise, we will reassign it with the default breakpoints
  if (!(mediaBreakpoints instanceof Object) || !Object.keys(mediaBreakpoints).length) {
    mediaBreakpoints = defaultBreakpoints;
  }

  const MediaQuery = {
    query: '@media ',
    /**
     * @function css
     * @desc Render the given css syntax
     * @param {String} args - ES6 Tagged Template Literals containing your CSS syntax
     * @see {@link https://www.styled-components.com/docs/advanced#tagged-template-literals}
     * @example {@lang javascript}
     * SuperQuery.all.minWidth.md.css`
     *  background-color: #CCC;
     * `
     */
    css(...args) {
      return renderCss`
      ${this.toString().trim()} {
        ${renderCss(...args)}
      }
    `;
    },
    /**
     * Returns the `media query` set
     * @function ToString
     * @returns {String} - The media query string.
     * @ignore
     */
    toString() {
      const result = this.query.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
      this.query = '@media ';
      return result;
    },
  };

  /**
   * @property breakpoints
   * @desc Breakpoint Selector
   * @example {@lang javascript}
   * SuperQuery().minWidth.md
   * @see defaultBreakpoints
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link module:SuperQuery~css|css}
   */
  Object.keys(mediaBreakpoints).forEach((label) => {
    const emUnit = mediaBreakpoints[label] / 16;

    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query += `${emUnit}em) `;
        return this;
      },
    });
  });


  /**
   * @property ScreenOrientation
   * @desc Screen Orientation Selector
   * @example {@lang javascript}
   * SuperQuery().all.and.portrait
   * @see screenOrientation
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link module:SuperQuery~css|css}
   */
  Object.keys(screenOrientation).forEach((label) => {
    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query += `(orientation: ${screenOrientation[label]}) `;
        return this;
      },
    });
  });


  /**
   * @property InitialLogicalOperator
   * @desc Initial Logical Operator Selector
   * @example {@lang javascript}
   * SuperQuery().only
   * @see initialLogicalOperator
   * @returns {Object} - Object containing functions of {@link mediaTypes}
   */
  Object.keys(initialLogicalOperator).forEach((label) => {
    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query += `${initialLogicalOperator[label]} `;
        return this;
      },
    });
  });

  /**
   * @property LogicalOperator
   * @desc Logical Operator Selector
   * @example {@lang javascript}
   * SuperQuery().screen.and
   * @see logicalOperator
   * @returns {Object} - Object containing functions of {@link mediaTypes},
   * {@link mediaFeature} and {@link screenOrientation}.
   */
  Object.keys(logicalOperator).forEach((label) => {
    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query = (logicalOperator[label] === logicalOperator.or
          ? `${this.toString()}${logicalOperator[label]} `
          : `${this.query} ${logicalOperator[label]} `);
        return this;
      },
    });
  });

  /**
   * @property MediaType
   * @desc Media Type Selector
   * @example {@lang javascript}
   * SuperQuery().print
   * @see mediaTypes
   * @returns {Object} - Object containing functions of {@link logicalOperator} and
   * {@link mediaFeature}.
   */
  Object.keys(mediaTypes).forEach((label) => {
    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query += `${mediaTypes[label]} `;
        return this;
      },
    });
  });


  /**
   * @property MediaFeature
   * @desc Media Feature Selector
   * @example {@lang javascript}
   * SuperQuery().width;
   * SuperQuery().width.of('120px');
   * SuperQuery().minResolution.of('300dpi');
   * SuperQuery().deviceAspectRatio.of('16/9');
   * @see mediaFeature
   * @param {String} - Optional value of the Media Feature
   * @returns {Object} - Object containing functions of {@link logicalOperator},
   * {@link module:SuperQuery~css|css}.
   */
  Object.keys(mediaFeature).forEach((label) => {
    Object.defineProperty(MediaQuery, label, {
      get() {
        this.query += `(${mediaFeature[label]}: `;
        return this;
      },
    });
  });

  /**
   * @function of
   * @desc Media Feature Selector
   * @example {@lang javascript}
   * SuperQuery().width.of('120px');
   * SuperQuery().minResolution.of('300dpi');
   * SuperQuery().deviceAspectRatio.of('16/9');
   * @see mediaFeature
   * @param {String} value Optional value of the Media Feature
   * @returns {Object} - Object containing functions of {@link logicalOperator},
   * {@link module:SuperQuery~css|css}.
   */
  MediaQuery.of = function of(value) {
    if (!value) {
      console.warn('Method "for" cannot be null or undefined. \n\n'
        + 'See documentation: https://bit.ly/2zaJLrH');
    }
    this.query += `${value}) `;
    return this;
  };
  return MediaQuery;
}
