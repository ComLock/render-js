/* global describe it */
import { strictEqual, throws } from 'assert';
import R, { render, doctype, html, el } from '../index';


describe('render', () => {
  it('tag', () => {
    strictEqual(
      render([
        doctype(),
        html()
      ]),
      `<!DOCTYPE html>
<html/>`
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
      render([
        doctype(),
        html({
          key: 'value',
          justKey: null
        })
      ]),
      `<!DOCTYPE html>
<html justKey key="value"/>`
    );
  });

  it('attributes then content', () => {
    strictEqual(
      render([
        doctype(),
        html(
          {
            key: 'value',
            justKey: null
          },
          'Text'
        )
      ]),
      `<!DOCTYPE html>
<html justKey key="value">Text</html>`
    );
  });

  it('content then attributes', () => {
    strictEqual(
      R.render([
        R.doctype(),
        R.html(
          'Text',
          {
            key: 'value',
            justKey: null
          }
        ) // html
      ]),
      `<!DOCTYPE html>
<html justKey key="value">Text</html>`
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
          key: 'value',
          justKey: null
        },
        'Text'
      ),
      '<myElement justKey key="value">Text</myElement>'
    );
  });
}); // describe
