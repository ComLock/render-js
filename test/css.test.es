/* global describe it */


import { deepStrictEqual } from 'assert';
import { classAppendAndCssFromStyle } from '../src/css.es';


describe('css', () => {
  it('pseudo', () => {
    const pseudo = ':active:checked:disabled:empty:enabled:first-child:first-of-type:hover:focus:in-range:invalid:last-child:last-of-type:link:only-of-type:only-child:optional:out-of-range:read-only:read-write:required:root:target:valid:visited::after::before::first-letter::first-line::selection';
    const className = 'ac-c-d-em-en-fc-fot-h-f-ir-i-lc-lot-l-oot-oc-o-oor-ro-rw-re-r-t-va-vi-af-b-fl-fli-s--c-r';
    deepStrictEqual(classAppendAndCssFromStyle({
      display: 'none',
      [`&${pseudo}`]: {
        color: 'red'
      },
      color: 'black'
    }), {
      classAppend: [
        'd-n',
        className,
        'c-b'
      ],
      css: [
        '.d-n{display:none}',
        `.${className}${pseudo}{color:red}`,
        '.c-b{color:black}'
      ]
    });
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

  /* it('autoprefixer true', () => {
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
  }); // autoprefixer true */

  describe('float', () => {
    it('left', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'left' }, {
        autoprefixer: false
      }), {
        classAppend: ['f-l'],
        css: [
          '.f-l{float:left}'
        ]
      });
    });

    it('right', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'right' }), {
        classAppend: ['f-r'],
        css: [
          '.f-r{float:right}'
        ]
      });
    });

    it('none', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'none' }), {
        classAppend: ['f-n'],
        css: [
          '.f-n{float:none}'
        ]
      });
    });
  });
}); // css
