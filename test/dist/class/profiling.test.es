/* eslint-disable no-console */
import {
  //deepStrictEqual,
  ok
} from 'assert';
import convertHrtime from 'convert-hrtime';
import {html, build, clone, render} from '../../../dist/class';
//import { toStr } from '../../../src/util/toStr.es';


// What is the average number of css properties set on an element? 10?
const STYLE = {
  //alignContent
  //alignItems
  /*animation: 'whatever',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '1s',
  animationFillMode: 'none',
  animationIterationCount: '1',
  animationName: 'whatever',
  animationPlayState: 'running',
  animationTimingFunction: 'start',*/
  backgroundColor: 'black',
  //border
  //borderColor
  //borderRadius
  //borderSpacing
  borderStyle: 'none',
  borderWidth: '0',
  //bottom
  boxSizing: 'border-box',
  color: 'white',
  /*cursor: 'pointer',
  clear: 'both',
  fill: 'black',*/
  font: 'inherit',
  fontSize: '100%',
  fontWeight: 100,
  lineHeight: '1',
  /*listStyle: 'none',
  listStyleImage: 'none',
  listStylePosition: 'inside',
  listStyleType: 'disc',*/
  margin: '0',
  outline: 'none',
  /*outlineColor: 'black',
  outlineStyle: 'solid',
  outlineWidth: 'medium',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  overflowX: 'auto',
  overflowY: 'scroll',*/
  padding: '0'/*,
  pointerEvents: 'none',
  position: 'absolute',
  textDecoration: 'none',
  textDecorationColor: 'black',
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  transition: 'all',
  transitionDelay: '.2s',
  transitionDuration: '1s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease-in-out',
  verticalAlign: 'baseline',
  whiteSpace: 'nowrap'*/
};


function profile(message, fn, times = 1000) {
  const start = process.hrtime();
  for (let i = 0; i < times; i += 1) {
    fn();
  }
  const end = process.hrtime();
  const average = (
    convertHrtime(end).nanoseconds - convertHrtime(start).nanoseconds
  ) / times;
  //console.log(`${average}ns ${message}`);
  //console.log(`value: ${toStr(fn())}`);
  return {
    average,
    value: fn()
  };
}


describe('dist', () => {
  describe('class', () => {
    it('profiling', () => {
      let res;
      const o = html({
        _s: STYLE
      });
      build(o);

      profile('clone a pre-built obj (and leave rendering to client-size)', () => {
        res = clone(o);
      });

      profile('construct (and leave rendering to client-size)', () => {
        res = html({
          _s: STYLE
        });
      });

      profile('clone a pre-built obj and render it', () => {
        res = render(clone(o));
      });

      profile('construct and render (no build or clone)', () => {
        res = render(html({
          _s: STYLE
        }));
      });

      profile('build with abbreviations and defaultUnits', () => {
        res = render(build(html({
          _s: STYLE
        })));
      });

      profile('build without abbreviations and defaultUnits', () => {
        res = render(build(html({
          _s: STYLE
        })), {
          abbreviateCssPropertyNames: false,
          abbreviateCssPropertyValues: false,
          addDefaultUnits: false
        });
      });

      ok(res);

      /*const samples = [[process.hrtime(), 'start']]; // 0
      const obj = html({
        _s: STYLE
      }); // obj
      samples.push([process.hrtime(), 'constructor with styling']); // 1
      build(obj);
      samples.push([process.hrtime(), 'build']); // 2
      const aClone = clone(obj);
      samples.push([process.hrtime(), 'clone']); // 3
      const res = render(aClone);
      samples.push([process.hrtime(), 'render']); // 4

      const obj2 = html({
        _s: STYLE
      }); // obj2
      samples.push([process.hrtime(), 'constructor2 with styling']); // 5
      const res2 = render(obj2);
      samples.push([process.hrtime(), 'render2']); // 6

      for (let i = 1; i < samples.length; i += 1) {
        const duration = convertHrtime(samples[i][0]).nanoseconds - convertHrtime(samples[i - 1][0]).nanoseconds;
        console.log(`${duration}ns ${samples[i][1]}`);
      }

      const cloneAndRender = convertHrtime(samples[4][0]).nanoseconds - convertHrtime(samples[2][0]).nanoseconds;
      console.log(`${cloneAndRender}ns clone and render`);

      const constructAndRender = convertHrtime(samples[6][0]).nanoseconds - convertHrtime(samples[4][0]).nanoseconds;
      console.log(`${constructAndRender}ns constructor2 and render2`);


      ok(res2);*/
    }); // profiling
  }); // class
}); // dist
