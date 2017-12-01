/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import {
  render,
  doctype, html, head,
  title,
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
} from 'enonic-xp-lib-render-es2015.es6';


export function get(request) {
  const model = {
    title: 'Title'
  };
  return {
    body: render([
      doctype('html'),
      html([
        head([
          title(model.title)
        ]), // head
        body([
          h1(title),
          main(
            {
              class: 'className',
              'data-property': 'value'
            },
            p('Text')
          )
        ]) // body
      ]) // html
    ]) // render
  }; // return
} // export function get
