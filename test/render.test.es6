/* global describe it */
import { strictEqual, throws } from 'assert';
import R, { render, doctype, html, br, div, el } from '../index';


describe('render', () => {
  it('doctype', () => {
    strictEqual(
      doctype(),
      '<!DOCTYPE html>'
    );
  });

  it('tag', () => {
    strictEqual(
      html(),
      '<html></html>'
    );
  });

  it('void elements', () => {
    strictEqual(
      render([
        br('get lost')
      ]),
      '<br/>'
    );
  });

  it('just content', () => {
    strictEqual(
      render([
        doctype(),
        html('Text')
      ]),
      `<!DOCTYPE html>
<html>Text</html>`
    );
  });

  it('attributes sorted', () => {
    strictEqual(
      html({
        key: 'value',
        alpha: 'first',
        true: true,
        emptyArr: [],
        arr: ['one', 'two'],
        class: ['second first'],
        emptyObj: {},
        obj: { key: 'value' },
        1: 1,
        float: 3.14,
        minusOne: -1,
        infinity: Infinity,
        false: false,
        null: null,
        'undefined': undefined, // eslint-disable-line quote-props
        0: 0,
        nan: NaN,
        emptyString: ''
      }),
      `<html 0='0' 1='1' alpha="first" arr='["one","two"]' class="first second" emptyArr='[]' emptyObj='{}' emptyString false='false' float='3.14' infinity='null' key="value" minusOne='-1' nan='null' obj='{"key":"value"}' true='true'></html>` // eslint-disable-line quotes
    );
  });

  it('attributes then content', () => {
    strictEqual(
      render([
        doctype(),
        html(
          {
            key: 'value'
          },
          'Text'
        )
      ]),
      `<!DOCTYPE html>
<html key="value">Text</html>`
    );
  });

  it('content then attributes', () => {
    strictEqual(
      R.render([
        R.doctype(),
        R.html(
          'Text',
          {
            key: 'value'
          }
        ) // html
      ]),
      `<!DOCTYPE html>
<html key="value">Text</html>`
    );
  });

  /*
    https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
      none
      https://developer.mozilla.org/en-US/docs/Web/CSS/length
        Relative length units: cap ch em ex ic lh rem rlh vh vw vi vb vmin vmax
        Absolute length units: px mm q cm in pt pc mozmm
      percentage
      https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value
      max-content
      min-content
      minmax(min, max)
      auto
      fit-content( [ <length> | <percentage> ] )
      repeat( [ <positive-integer> | auto-fill | auto-fit ] , <track-list> )
  */
  it('style attribute object, keep property order, dasherize property name', () => { // TODO same key multiple times Map() ?
    strictEqual(
      div({
        style: {
          'grid-template-rows': 'auto',
          gridTemplateColumns: 'auto 16px 1rem 25% 1fr'
        }
      }),
      '<div style="grid-template-rows: auto;grid-template-columns: auto 16px 1rem 25% 1fr"></div>'
    );
  });


  it('throws when two args and neither is Object', () => {
    throws(
      () => html('Text', '<p>Text</p>'),
      Error
    );
  });

  it('can render custom elements', () => {
    strictEqual(
      el(
        'myElement',
        {
          key: 'value'
        },
        'Text'
      ),
      '<myElement key="value">Text</myElement>'
    );
  });
}); // describe
