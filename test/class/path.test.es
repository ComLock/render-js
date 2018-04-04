import {deepStrictEqual} from 'assert';
import {
  html, head, title, body, main, h1
} from '../../src/class.es';


describe('class', () => {
  it('path', () => {
    const dom = html([
      head(title('Title')),
      body(main(h1('Title')))
    ]);
    deepStrictEqual(dom.head.title._c, 'Title');
    deepStrictEqual(dom.body.main.h1._c, 'Title');
  }); // it path
});// describe class
