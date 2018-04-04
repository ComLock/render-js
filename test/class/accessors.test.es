import {deepStrictEqual} from 'assert';
import {
  html,
  addContent, getAttribute, getAttributes, getContent, getMedia, getStyle,
  setAttribute, setAttributes, setContent, setMedia, setStyle
} from '../../src/class.es';


describe('class', () => {
  describe('dom accessors', () => {
    const dom = html();
    const STYLE = { borderBottomWidth: 1 };
    const MEDIA = {
      minWidth1: {
        borderBottomWidth: 1
      }
    };
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
      it('setStyle()', () => {
        setStyle(dom, STYLE);
        deepStrictEqual(dom._s, STYLE);
      }); // it setContent
      it('setMedia()', () => {
        setMedia(dom, MEDIA);
        deepStrictEqual(dom._m, MEDIA);
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
        }); // it getContent
        it('getStyle()', () => {
          deepStrictEqual(getStyle(dom), STYLE);
        }); // it getContent
        it('getMedia()', () => {
          deepStrictEqual(getMedia(dom), MEDIA);
        }); // it getContent
      }); // it getAttributes
    }); // describe dom getters
  }); // describe dom accessors
}); // describe class
