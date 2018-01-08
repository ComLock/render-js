/* global describe it */


import { deepStrictEqual } from 'assert';
import { classAppendAndCssFromStyle } from '../src/css.es';


describe('css', () => {
  it('autoprefixer false', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: false
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:flex}'
        ]
      }
    );
  }); // autoprefixer false

  it('autoprefixer true', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: true
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:-webkit-box;display:-ms-flexbox;display:flex}'
        ]
      }
    );
  }); // autoprefixer true
}); // css
