/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.0
 */

import SuperQuery from '../index';

describe('SuperQuery', () => {
  it('should query without media type `all` -> @media (max-width: 100px)', () => {
    const result = SuperQuery().maxWidth('100px').ToString();
    expect(result).toEqual('@media (max-width: 100px)');
  });

  it('should query with media type `all` -> @media (max-width: 100px)', () => {
    const result = SuperQuery().all().and().maxWidth('100px')
      .ToString();
    expect(result).toEqual('@media all and (max-width: 100px)');
  });

  it('should query with orientation `portrait` -> @media (max-width: 100px) and (orientation: portrait)', () => {
    const result = SuperQuery().maxWidth('100px').and().portrait()
      .ToString();
    expect(result).toEqual('@media (max-width: 100px) and (orientation: portrait)');
  });

  it('should query with `or` condition -> @media (width: 100px), (width: 200px)', () => {
    const result = SuperQuery().width('100px').or().width('200px')
      .ToString();
    expect(result).toEqual('@media (width: 100px), (width: 200px)');
  });

  it('should query for breakpoint `md` -> @media (max-width: 48em)', () => {
    const result = SuperQuery().maxWidth().md()
      .ToString();
    expect(result).toEqual('@media (max-width: 48em)');
  });

  it('should query `only` a media type -> @media only screen and (min-width: 769px) and (max-width: 1023px)', () => {
    const result = SuperQuery().only().screen().and()
      .minWidth('769px')
      .and()
      .maxWidth('1023px')
      .ToString();
    expect(result).toEqual('@media only screen and (min-width: 769px) and (max-width: 1023px)');
  });

  it('should query complex logic -> @media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10)', () => {
    const result = SuperQuery().screen().and().deviceAspectRatio('16/9')
      .or()
      .screen()
      .and()
      .deviceAspectRatio('16/10')
      .ToString();
    expect(result).toEqual('@media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10)');
  });

  it('should set custom breakpoints', () => {
    const customBreakpoints = {
      extraLarge: 1234,
    };

    const result = SuperQuery(customBreakpoints).minWidth().extraLarge().ToString();
    expect(result).toEqual('@media (min-width: 77.125em)');
  });

  it('should render css', () => {
    const result = SuperQuery().maxWidth().md().css`
      text-align: center;
    `;
    const expectedOutput = [
      '\n    ',
      '@media (max-width: 48em)',
      ' {\n      ',
      '\n      text-align: center;\n    ',
      '\n    }\n  ',
    ];
    expect(result).toEqual(expectedOutput);
  });
});
