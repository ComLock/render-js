import {deepStrictEqual} from 'assert';
import {
  html, clone
} from '../../dist/class';


describe('class', () => {
  describe('clone', () => {
    it('handles nested objects and arrays', () => {
      const dom = html();
      const aClone = clone(dom);
      deepStrictEqual(aClone, {
        _t: 'html'
      });
    }); // it
  }); // describe clone
}); // describe class
