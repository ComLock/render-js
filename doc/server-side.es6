/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import {
  render,
  doctype, html, head,
  title as _title,
  body,
  address, article, aside,
  blockquote,
  canvas,
  dd, div, dl, dt,
  fieldset, figcaption, figure, footer, form,
  h1, h2, h3, h4, h5, h6, header, hgroup, hr,
  li,
  main,
  nav, noscript,
  ol, output,
  p, pre,
  section,
  table, tfoot,
  ul,
  video
} from 'render-js';


export function get(request) {
  const title = 'Title';
  const model = {
    p: 'Text',
    class: 'className',
    dataProperty: 'value',
    title
  };
  return {
    body: render([
      doctype(),
      html([
        head([
          _title(title)
        ]), // head
        body([
          h1(model.title),
          main(
            {
              class: model.class,
              'data-property': model.dataProperty
            },
            p(model.p)
          )
        ]) // body
      ]) // html
    ]) // render
  }; // return
} // export function get
