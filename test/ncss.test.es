/* global describe it */
/* eslint-disable function-paren-newline */
import { deepStrictEqual } from 'assert';
import { el, Content } from '../ncss.es';

describe('ncss', () => {
  it('element without spec or content', () => {
    deepStrictEqual(el('span'), new Content({
      html: '<span></span>',
      tachyons: []
    }));
  });

  it('element with only second argument of type String', () => {
    deepStrictEqual(el('h1', 'String'), new Content({
      html: '<h1>String</h1>',
      tachyons: []
    }));
  });

  it('element with only second argument of type Content', () => {
    deepStrictEqual(el('div', el('p', 'String')), new Content({
      html: '<div><p>String</p></div>',
      tachyons: []
    }));
  });

  it('element with only second argument of type Object', () => {
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }
      ), new Content({
        html: '<div style="display: none"></div>',
        tachyons: []
      })
    );
  });

  it('element with spec and third argument of type String', () => {
    deepStrictEqual(
      el(
        'h1', {
          style: {
            display: 'none'
          }
        }, 'String'
      ), new Content({
        html: '<h1 style="display: none">String</h1>',
        tachyons: []
      })
    );
  });

  it('element with spec and third argument of type Content', () => {
    deepStrictEqual(
      el(
        'div', {
          style: {
            display: 'none'
          }
        }, el('p', 'String')
      ), new Content({
        html: '<div style="display: none"><p>String</p></div>',
        tachyons: []
      })
    );
  });

  it('element with spec._media', () => {
    deepStrictEqual(
      el(
        'div', {
          _media: {
            minWidth480: {
              display: 'none'
            }
          }
        }
      ), new Content({
        html: '<div class="w-mi-480-d-n"></div>',
        tachyons: ['@media (min-width: 480px) { .w-mi-480-d-n { display: none !important; } }']
      })
    );
  });
}); // describe ncss
