/* eslint-disable quotes */
/* eslint-disable quote-props */
import { deepStrictEqual, throws } from 'assert';
import R, { el, render, doctype, html, head,
  body, main, section, header, div, p, br
} from '../index';


describe('render', () => {
  it('doctype', () => {
    deepStrictEqual(
      doctype(),
      '<!DOCTYPE html>'
    );
  });

  it('tag', () => {
    deepStrictEqual(
      html(),
      '<html></html>'
    );
  });

  it('void elements', () => {
    deepStrictEqual(
      render([
        br('get lost')
      ]),
      '<br/>'
    );
  });

  it('just content', () => {
    deepStrictEqual(
      render([
        doctype(),
        html('Text')
      ]),
      `<!DOCTYPE html>
<html>Text</html>`
    );
  });

  it('attributes sorted', () => {
    deepStrictEqual(
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
        'undefined': undefined,
        0: 0,
        nan: NaN,
        emptyString: ''
      }),
      `<html 0='0' 1='1' alpha="first" arr='["one","two"]' class="first second" empty-arr='[]' empty-obj='{}' empty-string false='false' float='3.14' infinity='null' key="value" minus-one='-1' nan='null' obj='{"key":"value"}' true='true'></html>`
    );
  });

  it('attributes then content', () => {
    deepStrictEqual(
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
    deepStrictEqual(
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

  /* https://www.w3.org/TR/html5/syntax.html#elements-attributes
     Attribute names, may be written with any mix of lower- and uppercase
     letters that are an ASCII case-insensitive match for the attribute’s name.
  */
  it('dasherize attribute names', () => {
    deepStrictEqual(
      div({
        dataString: 'value',
        dataEmptyString: '',
        dataZero: 0,
        dataOne: 1,
        dataMinusOne: -1,
        dataFloat: 3.14,
        dataNegativeFloat: -3.14,
        dataEmptyArray: [],
        dataArray: ['value'],
        dataBooleanTrue: true,
        dataBooleanFalse: false,
        dataEmptryObj: {},
        dataObj: { key: 'value' },
        dataNull: null, // disappears
        dataUndefined: undefined, // disappears
        dataInfinity: Infinity,
        dataNaN: NaN
      }),
      `<div data-array='["value"]' data-boolean-false='false' data-boolean-true='true' data-emptry-obj='{}' data-empty-array='[]' data-empty-string data-float='3.14' data-infinity='null' data-minus-one='-1' data-na-n='null' data-negative-float='-3.14' data-obj='{"key":"value"}' data-one='1' data-string="value" data-zero='0'></div>`
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
    deepStrictEqual(
      div({
        style: {
          'grid-template-rows': 'auto',
          gridTemplateColumns: 'auto 16px 1rem 25% 1fr'
        }
      }),
      '<div style="grid-template-rows: auto;grid-template-columns: auto 16px 1rem 25% 1fr"></div>'
    );
  });

  it('style attribute : default units', () => {
    deepStrictEqual(
      div({
        style: {
          width: 1
        }
      }),
      '<div style="width: 1px"></div>'
    );
  });

  it('throws when two args and neither is Object', () => {
    throws(
      () => html('Text', '<p>Text</p>'),
      Error
    );
  });

  it('can render custom elements', () => {
    deepStrictEqual(
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

  it('accepts array as content', () => {
    deepStrictEqual(
      html([head]),
      '<html><head></head></html>'
    );
  });

  it('accepts function as content', () => {
    deepStrictEqual(
      html(() => head()),
      '<html><head></head></html>'
    );
  });

  it('accepts nested functions as content', () => {
    deepStrictEqual(
      body(() => () => main()),
      '<body><main></main></body>'
    );
  });

  it('accepts arrays of nested functions as content', () => {
    deepStrictEqual(
      section([
        () => header(),
        () => () => p()
      ]),
      '<section><header></header><p></p></section>'
    );
  });
}); // describe
