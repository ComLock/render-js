//import {print as inspect} from 'q-i';
import {deepStrictEqual} from 'assert';
import {
  doctype, html, head, title, body, main, h1, ul, li, domPath
} from '../../lib/class';


describe('class', () => {
  describe('domPath', () => {
    it('brackets notation', () => {
      const view = ul([
        li('First'),
        li('Second')
      ]);
      deepStrictEqual(domPath(view, 'li[0]')._c, 'First');
      deepStrictEqual(domPath(view, 'li[1]')._c, 'Second');
    }); // it dot notation

    it('dot notation', () => {
      const dom = html([
        head(title('Title')),
        body(main(h1('Title')))
      ]);
      deepStrictEqual(domPath(dom, 'head.title')._c, 'Title');
      deepStrictEqual(domPath(dom, 'body.main.h1')._c, 'Title');
    }); // it dot notation

    it('root element isArray', () => {
      const dom = [
        doctype(),
        html('Text')
      ]; //inspect({dom});
      const htmlRef = domPath(dom, 'html'); //inspect({htmlRef});
      deepStrictEqual(htmlRef._c, 'Text');
    }); // it root element isArray
  }); // describe domPath
});// describe class
