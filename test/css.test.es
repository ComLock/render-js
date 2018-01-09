/* global describe it */


import { deepStrictEqual } from 'assert';
import { classAppendAndCssFromStyle } from '../src/css.es';


describe('css', () => {

  it('pseudo', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        '&:hover': {
          color: 'red'
        }
      }),{
        classAppend: ['hover-c-r'],
        css: [
          '.hover-c-r:hover{color:red}'
        ]
      }
    );
  });

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

  describe('float', () => {
    it('left', () => {
      deepStrictEqual(classAppendAndCssFromStyle({float: 'left'},{
        autoprefixer: false
      }), {
        classAppend: ['f-l'],
        css: [
          '.f-l{float:left}'
        ]
      });
    });

    it('right', () => {
      deepStrictEqual(classAppendAndCssFromStyle({float: 'right'}), {
        classAppend: ['f-r'],
        css: [
          '.f-r{float:right}'
        ]
      });
    });

    it('none', () => {
      deepStrictEqual(classAppendAndCssFromStyle({float: 'none'}), {
        classAppend: ['f-n'],
        css: [
          '.f-n{float:none}'
        ]
      });
    });
  });
}); // css
