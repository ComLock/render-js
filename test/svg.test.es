/* eslint-disable no-console */
import { ok } from 'assert';
import { ELEMENTS as HTML_ELEMENTS } from '../dist/html';
import { SVG_NOT_HTML_ELEMENTS } from '../dist/svg';

describe('svg', () => {
  it('check name collisions', () => {
    let noCollision = true;
    SVG_NOT_HTML_ELEMENTS.forEach(s => {
      const collision = HTML_ELEMENTS.includes(s);
      if (collision) {
        console.log(`WARNING: Element ${s} is both and HTML and SVG element!`);
        noCollision = false;
      }
    });
    ok(noCollision);
  }); // it
}); // describe
