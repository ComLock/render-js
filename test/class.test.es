import {deepStrictEqual} from 'assert';
import {
  html, head, title, body, main, h1,
  svg,
  addContent, getAttribute, getAttributes, getContent, setAttribute,
  setAttributes, setContent,
  clone, render
} from '../src/class.es';


describe('class', () => {
  describe('function', () => {
    it('no params', () => {
      deepStrictEqual(html(), {
        _t: 'html'
      });
    }); // it

    it('empty params', () => {
      deepStrictEqual(html(null, null), {
        _t: 'html'
      });
      deepStrictEqual(html('', ''), { //Should this fail?
        _t: 'html'
      });
      deepStrictEqual(html({}), {
        _t: 'html',
        _a: {}
      });
      deepStrictEqual(html({}, ''), {
        _t: 'html',
        _a: {}
      });
    }); // it

    it('useful params', () => {
      deepStrictEqual(html({prop: 'value'}, 'text'), {
        _t: 'html',
        _a: {
          prop: 'value'
        },
        _c: 'text'
      });
    });//it


    describe('attributes', () => {
      it('dasherize', () => {
        const dom = html({dataProp: 'value'});
        deepStrictEqual(dom, {
          _t: 'html',
          _a: {
            dataProp: 'value'
          }
        });
        const r = render(dom);
        deepStrictEqual(r, {
          css: [],
          html: '<html data-prop="value"></html>'
        });
      }); // it
      it('handles svg viewBox attribute which is case sensitive', () => {
        const VIEWBOX = '0 0 1 1';
        const dom = svg({ viewBox: VIEWBOX });
        deepStrictEqual(dom, {
          _t: 'svg',
          _a: {
            viewBox: VIEWBOX
          }
        });
        deepStrictEqual(render(dom), {
          css: [],
          html: `<svg viewBox="${VIEWBOX}"></svg>`
        });
      }); // it

      it('style attribute object to string addings default unit', () => {
        const dom = html({
          style: {
            borderBottomWidth: 1,
            lineHeight: 1
          }
        });
        deepStrictEqual(dom, {
          _t: 'html',
          _a: {
            style: {
              borderBottomWidth: 1,
              lineHeight: 1
            }
          }
        });
        deepStrictEqual(render(dom), {
          css: [],
          html: '<html style="border-bottom-width:1px;line-height:1px"></html>'
        });
      }); // it
    }); // describe attributes*/
  }); // describe function


  describe('path', () => {
    const dom = html([
      head(title('Title')),
      body(main(h1('Title')))
    ]);
    deepStrictEqual(dom.head.title._c, 'Title');
    deepStrictEqual(dom.body.main.h1._c, 'Title');
  }); // describe path


  describe('dom accessors', () => {
    const dom = html();
    describe('dom setters', () => {
      it('setAttributes()', () => {
        setAttributes(dom, { name: 'value' });
        deepStrictEqual(dom._a.name, 'value');
      }); // it setAttributes
      it('setAttribute()', () => {
        setAttribute(dom, 'anotherName', 'anotherValue');
        deepStrictEqual(dom._a.anotherName, 'anotherValue');
      }); // it setAttribute
      it('setContent()', () => {
        setContent(dom, 'content');
        deepStrictEqual(dom._c, 'content');
      }); // it setContent
    }); // describe dom setters
    describe('dom adders', () => {
      it('addContent()', () => {
        addContent(dom, 'content');
        deepStrictEqual(dom._c, ['content', 'content']);
      }); // it setContent
    }); // describe dom setters
    describe('dom getters', () => {
      it('getAttribute()', () => {
        deepStrictEqual(getAttribute(dom, 'name'), 'value');
      }); // it getAttribute
      it('getAttributes()', () => {
        deepStrictEqual(getAttributes(dom), {
          name: 'value',
          anotherName: 'anotherValue'
        });
        it('getContent()', () => {
          deepStrictEqual(getContent(dom), 'content');
        }); // it setContent
      }); // it getAttributes
    }); // describe dom getters
  }); // describe dom accessors


  describe('build', () => {
  }); // describe build


  describe('clone', () => {
    it('handles nested objects and arrays', () => {
      const dom = html();
      const aClone = clone(dom);
      deepStrictEqual(aClone, {
        _t: 'html'
      });
    }); // it
  }); // describe clone
});// describe class
