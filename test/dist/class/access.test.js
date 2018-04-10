import merge from 'deepmerge';
import {deepStrictEqual} from 'assert';
import {
  access,
  domPath,
  html
} from '../../../dist/class';


describe('dist', () => {
  describe('class', () => {
    it('access', () => {
      const CLASS = 'className';
      const CONTENT = 'content';
      const CONTENTS = [
        CONTENT,
        CONTENT
      ];
      const STYLE_1 = {boxSizing: 'border-box'};
      const STYLE_2 = {display: 'block'};
      const STYLES = merge(STYLE_1, STYLE_2);
      const MEDIA = {minWidth1: STYLE_1};
      const DOM = [html()];
      const obj = access(DOM, 'html');
      const ATTRIBUTES = {
        class: [
          CLASS
        ],
        key: 'keyValue',
        name: 'nameValue',
        prop: 'propValue'
      };
      deepStrictEqual(
        obj
          .addClass(CLASS)
          .setContent(CONTENT)
          .addContent(CONTENT)
          .setAttribute('name', 'nameValue')
          .setAttributes({key: 'keyValue', prop: 'propValue'})
          .setStyle(STYLE_1)
          .setMedia(MEDIA)
          .addStyle(STYLE_2).element,
        {
          _t: 'html',
          _a: ATTRIBUTES,
          _c: CONTENTS,
          _s: STYLES,
          _m: MEDIA
        } // expected
      ); // deepStrictEqual
      const obj2 = access(domPath(DOM, 'html'));
      deepStrictEqual(obj2.getAttribute('name'), 'nameValue');
      deepStrictEqual(obj2.getAttributes(), ATTRIBUTES);
      deepStrictEqual(obj2.getContent(), CONTENTS);
      deepStrictEqual(obj2.getMedia(), MEDIA);
      deepStrictEqual(obj2.getStyle(), STYLES);
    }); // access
  }); // class
}); // dist
