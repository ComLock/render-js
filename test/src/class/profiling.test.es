/* eslint-disable no-console */
/*import {
  //deepStrictEqual,
  ok
} from 'assert';*/
import convertHrtime from 'convert-hrtime';
import {html, build, clone, render} from '../../../src/class.es';
//import { toStr } from '../../../src/util/toStr.es';


const STYLE = {
  //alignContent
  //alignItems
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
  font: 'inherit',
  fontSize: '100%',
  lineHeight: '1',
  margin: '0',
  padding: '0',
  verticalAlign: 'baseline'
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
  console.log(`${average}ns ${message}`);
  //console.log(`value: ${toStr(fn())}`);
  return {
    average,
    value: fn()
  };
}


describe('src', () => {
  describe('class', () => {
    it('profiling', () => {
      const o = html({
        _s: STYLE
      });
      build(o);
      profile('clone a pre-built obj and render it', () => {
        render(clone(o));
      });

      profile('construct and render (no build or clone)', () => {
        render(html({
          _s: STYLE
        }));
      });

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

      ok(res);
      ok(res2);*/
    }); // profiling
  }); // class
}); // src
