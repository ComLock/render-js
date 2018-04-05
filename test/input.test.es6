/* global describe it */
//import {print as inspect} from 'q-i'
import { ok, strictEqual } from 'assert';
import { ELEMENTS } from '../src/html/elements.es';
import I, { button as inputButton, checkbox, color, datetimeLocal, email, file,
  hidden, image as inputImage, INPUT_TYPES_WITHOUT_KNOWN_CONFLICTS, month,
  number, password, radio, range, reset, search, submit, tel, text,
  time as inputTime, url, week
} from '../src/html/input.es';


describe('input', () => {
  it('check namespace conflicts', () => {
    INPUT_TYPES_WITHOUT_KNOWN_CONFLICTS.forEach(t => ok(
      !ELEMENTS.includes(t),
      `${t} is both an element and an input type`
    ));
  });

  it('button', () => {
    strictEqual(inputButton(), '<input type="button"/>');
    strictEqual(I.button(), '<input type="button"/>');
  });

  it('checkbox', () => {
    strictEqual(checkbox(), '<input type="checkbox"/>');
    strictEqual(I.checkbox(), '<input type="checkbox"/>');
    strictEqual(
      checkbox({ type: 'not overideable' }),
      '<input type="checkbox"/>'
    );
    strictEqual(
      checkbox({
        checked: '',
        disabled: '',
        id: 'id',
        name: 'name'
      }),
      '<input checked disabled id="id" name="name" type="checkbox"/>'
    );
  });

  it('color', () => {
    strictEqual(color(), '<input type="color"/>');
    strictEqual(I.color(), '<input type="color"/>');
  });

  it('datetimeLocal', () => {
    strictEqual(datetimeLocal(), '<input type="datetime-local"/>');
    strictEqual(I.datetimeLocal(), '<input type="datetime-local"/>');
  });

  it('email', () => {
    strictEqual(email(), '<input type="email"/>');
    strictEqual(I.email(), '<input type="email"/>');
  });

  it('file', () => {
    strictEqual(file(), '<input type="file"/>');
    strictEqual(I.file(), '<input type="file"/>');
  });

  it('hidden', () => {
    strictEqual(hidden(), '<input type="hidden"/>');
    strictEqual(I.hidden(), '<input type="hidden"/>');
  });

  it('image', () => {
    strictEqual(inputImage(), '<input type="image"/>');
    strictEqual(I.image(), '<input type="image"/>');
  });

  it('month', () => {
    strictEqual(month(), '<input type="month"/>');
    strictEqual(I.month(), '<input type="month"/>');
  });

  it('number', () => {
    strictEqual(number(), '<input type="number"/>');
    strictEqual(I.number(), '<input type="number"/>');
  });

  it('password', () => {
    strictEqual(password(), '<input type="password"/>');
    strictEqual(I.password(), '<input type="password"/>');
  });

  it('radio', () => {
    strictEqual(radio(), '<input type="radio"/>');
    strictEqual(I.radio(), '<input type="radio"/>');
  });

  it('range', () => {
    strictEqual(range(), '<input type="range"/>');
    strictEqual(I.range(), '<input type="range"/>');
  });

  it('reset', () => {
    strictEqual(reset(), '<input type="reset"/>');
    strictEqual(I.reset(), '<input type="reset"/>');
  });

  it('search', () => {
    strictEqual(search(), '<input type="search"/>');
    strictEqual(I.search(), '<input type="search"/>');
  });

  it('submit', () => {
    strictEqual(submit(), '<input type="submit"/>');
    strictEqual(I.submit(), '<input type="submit"/>');
  });

  it('tel', () => {
    strictEqual(reset(), '<input type="reset"/>');
    strictEqual(I.reset(), '<input type="reset"/>');
  });

  it('reset', () => {
    strictEqual(tel(), '<input type="tel"/>');
    strictEqual(I.tel(), '<input type="tel"/>');
  });

  it('text', () => {
    strictEqual(text(), '<input type="text"/>');
    strictEqual(I.text(), '<input type="text"/>');
  });

  it('time', () => {
    strictEqual(inputTime(), '<input type="time"/>');
    strictEqual(I.time(), '<input type="time"/>');
  });

  it('url', () => {
    strictEqual(url(), '<input type="url"/>');
    strictEqual(I.url(), '<input type="url"/>');
  });

  it('week', () => {
    strictEqual(week(), '<input type="week"/>');
    strictEqual(I.week(), '<input type="week"/>');
  });
}); // describe
