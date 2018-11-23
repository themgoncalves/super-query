/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */
import SuperQuery from '../superQuery';
import flatSingle from '../utils/flatSingle';
import removeEmptyEntries from '../utils/removeEmptyEntries';
import cleanArray from '../utils/cleanArray';

describe('SuperQuery', () => {
  it('should query without media type `all` -> @media (max-width: 100px)', () => {
    const result = SuperQuery().maxWidth.of('100px').toString();
    expect(result).toEqual('@media (max-width: 100px)');
  });

  it('should query with media type `all` -> @media (max-width: 100px)', () => {
    const result = SuperQuery().all.and.maxWidth.of('100px').toString();
    expect(result).toEqual('@media all and (max-width: 100px)');
  });

  it('should query with orientation `portrait` -> @media (max-width: 100px) and (orientation: portrait)', () => {
    const result = SuperQuery().maxWidth.of('100px').and.portrait.toString();
    expect(result).toEqual('@media (max-width: 100px) and (orientation: portrait)');
  });

  it('should query with `or` condition -> @media (width: 100px), (width: 200px)', () => {
    const result = SuperQuery().width.of('100px').or.width.of('200px').toString();
    expect(result).toEqual('@media (width: 100px), (width: 200px)');
  });

  it('should query for breakpoint `md` -> @media (max-width: 48em)', () => {
    const result = SuperQuery().maxWidth.md.toString();
    expect(result).toEqual('@media (max-width: 48em)');
  });

  it('should query `only` a media type -> @media only screen and (min-width: 769px) and (max-width: 1023px)', () => {
    const result = SuperQuery().only.screen.and.minWidth.of('769px').and.maxWidth.of('1023px').toString();
    expect(result).toEqual('@media only screen and (min-width: 769px) and (max-width: 1023px)');
  });

  it('should query complex logic -> @media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10)', () => {
    const result = SuperQuery().screen.and.deviceAspectRatio.of('16/9').or.screen.and.deviceAspectRatio.of('16/10').toString();
    expect(result).toEqual('@media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10)');
  });

  it('should set custom breakpoints', () => {
    const customBreakpoints = {
      extraLarge: 1234,
    };

    const result = SuperQuery(customBreakpoints).minWidth.extraLarge.toString();
    expect(result).toEqual('@media (min-width: 77.125em)');
  });

  it('should render css', () => {
    const result = (SuperQuery().maxWidth.md.css`
      text-align: center;
    `)
    |> flatSingle
    |> removeEmptyEntries
    |> cleanArray;

    const expectedOutput = '@media (max-width: 48em), { , text-align: center; , }';
    expect(result).toEqual(expectedOutput);
  });
});
