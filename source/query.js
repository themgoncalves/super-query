/**
 * themgoncalves
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 0.1.0
 */

import { css } from 'styled-components';

import {
  screenOrientation,
  breakpoints,
  mediaTypes,
  mediaFeature,
  logicalOperator,
  initialLogicalOperator,
} from './types';

/* eslint-disable no-use-before-define */
const mediaQuery = () => {
  // media query string
  let query = '@media ';

  const ToString = () => String(query).replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' '); // eslint-disable-line no-unused-vars

  const renderCss = (...args) => css`
    ${query.toString().trim()} {
      ${css(...args)}
    }
  `;

  // breakpoint selector
  // e.g. mediaBreakpoints{...}.md()
  const breakpointsSelector = Object.keys(breakpoints).reduce((accumulator, label) => {
    const emUnit = breakpoints[label] / 16;
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `${emUnit}em) `;
      return ({
        ...logicalOperatorSelector,
        ...{ css: renderCss, ToString },
      });
    };
    return accumulator;
  }, {});

  // screen orientation selector
  // e.g. mediaBreakpoints{...}.portrait()
  const screenOrientationSelector = Object.keys(screenOrientation).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `(orientation: ${screenOrientation[label]}) `;
      return ({ ...logicalOperatorSelector, ...{ css: renderCss, ToString } });
    };
    return accumulator;
  }, {});

  // initial logical operator selector
  // e.g. mediaBreakpoints{...}.only()
  const initialLogicalOperatorSelector = Object.keys(initialLogicalOperator)
    .reduce((accumulator, label) => {
      accumulator[label] = () => { // eslint-disable-line no-param-reassign
        query += `${initialLogicalOperator[label]} `;
        return ({ ...mediaTypeSelector, ...{ oString: ToString } });
      };
      return accumulator;
    }, {});

  // logical operator selector
  // e.g. mediaBreakpoints{...}.and()
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

  // media type selector
  // e.g. mediaBreakpoints{...}.all()
  const mediaTypeSelector = Object.keys(mediaTypes).reduce((accumulator, label) => {
    accumulator[label] = () => { // eslint-disable-line no-param-reassign
      query += `${mediaTypes[label]} `;
      return ({ ...logicalOperatorSelector, ...mediaFeatureSelector, ...{ ToString } });
    };
    return accumulator;
  }, {});

  // media feature selector
  // e.g. mediaBreakpoints{...}.minWidth()
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

  return ({
    ...initialLogicalOperatorSelector,
    ...mediaTypeSelector,
    ...mediaFeatureSelector,
    ...{ ToString },
  });
};
/* eslint-enable no-use-before-define */
export default mediaQuery;
