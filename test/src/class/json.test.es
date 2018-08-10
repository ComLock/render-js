/* eslint-disable no-console */
import {deepStrictEqual} from 'assert';
import {html, div, render} from '../../../src/class.es';
import {decodeHtmlEntity} from '../../../src/html/decodeHtmlEntity.es';
import {toStr} from '../../../src/util/toStr.es';


const SQ = "'";
//const DQ = '"';


describe('src', () => {
  describe('class', () => {
    it('json', () => {
      // Server-side
      const obj = div({
        dataSingleQuote: "'",
        dataDoubleQuote: '"',
        dataAmp: '&',
        dataLt: '<',
        dataGt: '>',
        dataTab: '  ',
        dataNewLine: "\n", // eslint-disable-line quotes
        dataReturn: "\r", // eslint-disable-line quotes
        _s: {
          color: 'black'
        }
      });

      const serverSideObj = html({dataRenderJson: obj});
      //console.log(toStr({serverSideObj}));

      const serverSideRes = render(serverSideObj);
      //console.log(toStr({serverSideRes}));

      // Client-side
      const htmlEntity = serverSideRes.html.split(SQ)[1];
      //console.log(toStr({htmlEntity}));

      const json = decodeHtmlEntity(htmlEntity);
      //console.log(toStr({json}));

      const clientSideObj = JSON.parse(json);
      //console.log(toStr({clientSideObj}));

      const clientSideRes = render(clientSideObj);
      //console.log(toStr({clientSideRes}));

      deepStrictEqual(clientSideRes, {
        css: ['.c-b{color:black}'],
        html: `<div class="c-b" data-amp="&" data-double-quote=""" data-gt=">" data-lt="<" data-new-line="\n" data-return="\r" data-single-quote="'" data-tab="  "></div>` // eslint-disable-line quotes
      });
    }); // json
  }); // class
}); // src
