import {deepStrictEqual} from 'assert';

import {classAppendAndCssFromStyle} from '../../../src/css/classAppendAndCssFromStyle.es';

describe('src', () => {
  describe('css', () => {
    describe('classAppendAndCssFromStyle', () => {
      it('no nesting', () => {
        deepStrictEqual(
          classAppendAndCssFromStyle({
            color: 'blue',
          }),
          {
            classAppend: [
              'c-bl',
            ],
            css: [
              '.c-bl{color:blue}',
            ]
          }
        );
      });

      it('one level', () => {
        deepStrictEqual(
          classAppendAndCssFromStyle({
            '&:active': {
              color: 'black',
            },
          }),
          {
            classAppend: [
              'ac--c-b',
            ],
            css: [
              '.ac--c-b:active{color:black}',
            ]
          }
        );
      });

      it('two levels', () => {
        deepStrictEqual(
          classAppendAndCssFromStyle({
            '&:active': {
              '&:hover': {
                color: 'red',
              }
            },
          }),
          {
            classAppend: [
              'ac--h--c-r'
            ],
            css: [
              '.ac--h--c-r:hover{color:red}'
            ]
          }
        );
      });
    }); // classAppendAndCssFromStyle
  }); // css
}); // src
