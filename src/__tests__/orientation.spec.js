/**
 * SuperQuery
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 3.0.0
 */

import Orientation from '../core/orientation';

describe('Orientation', () => {
  it('Should return a array of object', () => {
    const options = {
      current: jest.fn(),
      isLocked: jest.fn(),
      lock: jest.fn(),
      onChange: jest.fn(),
      unlock: jest.fn(),
    };
    Object.keys(options).forEach((key) => {
      expect(Orientation).toHaveProperty(key);
    });
  });

  it('Should return default orientation -> portrait-primary', () => {
    expect(Orientation.current()).toEqual('portrait-primary');
  });

  it('Should not be locked', () => {
    expect(Orientation.isLocked()).toBeFalsy();
  });

  it('Should return false when attempt to lock the orientation', () => {
    expect(Orientation.lock('landscape-primary')).toBeFalsy();
  });

  it('Should return false when attempt to unlock the orientation', () => {
    expect(Orientation.unlock()).toBeFalsy();
  });

  it('Should trigger callback function when orientation has changed', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const callback = jest.fn();
    Orientation.onChange(callback);
    map.orientationchange();
    expect(callback).toHaveBeenCalled();
  });

  it('Should trigger callback function when orientation has changed', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const callback = jest.fn();
    Orientation.onChange(callback);
    map.orientationchange();
    expect(callback).toHaveBeenCalled();
  });
});
