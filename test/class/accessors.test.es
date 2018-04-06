import {deepStrictEqual} from 'assert';
import {
  html,
  addClass, addContent, addStyle,
  getAttribute, getAttributes, getContent, getMedia, getStyle,
  setAttribute, setAttributes, setContent, setMedia, setStyle
} from '../../lib/class';


describe('class', () => {
  describe('dom accessors', () => {
    const dom = html();
    const STYLE = { borderBottomWidth: 1 };
    const MEDIA = {
      minWidth1: {
        borderBottomWidth: 1
      }
    };
    const CLASS = [
      'a',
      'b',
      'c'
    ];
    describe('dom setters', () => {
      it('addStyle()', () => {
        addStyle(dom, 'borderBottomWidth', 1);
        deepStrictEqual(dom._s, STYLE);
        setStyle(dom, {});
        deepStrictEqual(dom._s, {});
        addStyle(dom, STYLE);
        deepStrictEqual(dom._s, STYLE);
        setStyle(dom, {});
        deepStrictEqual(dom._s, {});
      }); // it setAttributes
      it('setAttribute() when no previous attributes', () => {
        setAttribute(dom, 'anotherName', 'anotherValue');
        deepStrictEqual(dom._a.anotherName, 'anotherValue');
      }); // it setAttribute
      it('addClass()', () => {
        addClass(dom, [
          'a a b c',
          'c b b a'
        ]);
        deepStrictEqual(dom._a.class, CLASS);
      }); // it setAttributes
      it('addContent() handles no previous content else makes array', () => {
        addContent(dom, 'content');
        deepStrictEqual(dom._c, 'content');
        addContent(dom, 'content');
        deepStrictEqual(dom._c, ['content', 'content']);
      }); // it setContent
      it('setAttributes() merges', () => {
        setAttributes(dom, { name: 'value' });
        deepStrictEqual(dom._a.name, 'value');
      }); // it setAttributes
      it('setContent() overwrites previous content', () => {
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
      it('are chainable', () => {
        const semantic = html();
        setStyle(
          setMedia(
            setAttributes(
              setAttribute(
                addContent(
                  setContent(
                    addClass(semantic, 'className'),
                    'Text'
                  ),
                  'More text'
                ),
                'name', 'value'
              ),
              {gets: 'merged'}
            ),
            MEDIA
          ),
          STYLE
        );
        deepStrictEqual(semantic, {
          _t: 'html',
          _a: {
            class: ['className'],
            gets: 'merged',
            name: 'value'
          },
          _c: ['Text', 'More text'],
          _s: STYLE,
          _m: MEDIA
        });
      }); // it are chainable
    }); // describe dom setters


    describe('dom getters', () => {
      it('getAttribute()', () => {
        deepStrictEqual(getAttribute(dom, 'name'), 'value');
      }); // it getAttribute
      it('getAttributes()', () => {
        deepStrictEqual(getAttributes(dom), {
          name: 'value',
          anotherName: 'anotherValue',
          class: CLASS
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
