/* eslint-disable no-console */
//import {print as inspect} from 'q-i'
import { ok } from 'assert';
import { ELEMENTS as HTML_ELEMENTS } from '../src/html/elements.es';
import { SVG_NOT_HTML_ELEMENTS } from '../src/svg.es';

describe('svg', () => {
  it('check name collisions', () => {
    let noCollision = true;
    //inspect(HTML_ELEMENTS);
    //inspect(SVG_NOT_HTML_ELEMENTS);
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
