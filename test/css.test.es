/* global describe it */


import { deepStrictEqual } from 'assert';
import { classAppendAndCssFromStyle } from '../src/css.es';


describe('css', () => {
  it('pseudo', () => {
    const pseudo = ':active:checked:disabled:empty:enabled:first-child:first-of-type:hover:focus:in-range:invalid:last-child:last-of-type:link:only-of-type:only-child:optional:out-of-range:read-only:read-write:required:root:target:valid:visited::after::before::first-letter::first-line::selection';
    const className = 'ac-c-d-em-en-fc-fot-h-f-ir-i-lc-lot-l-oot-oc-o-oor-ro-rw-re-r-t-va-vi-af-b-fl-fli-s--c-r';
    deepStrictEqual(classAppendAndCssFromStyle({
      display: 'none',
      [`&${pseudo}`]: {
        color: 'red'
      },
      color: 'black'
    }), {
      classAppend: [
        'd-n',
        className,
        'c-b'
      ],
      css: [
        '.d-n{display:none}',
        `.${className}${pseudo}{color:red}`,
        '.c-b{color:black}'
      ]
    });
  });

  it('nested', () => {
    const className = 'in-div-c-r';
    deepStrictEqual(
      classAppendAndCssFromStyle({
        '& div': {
          color: 'red'
        }
      }),
      {
        classAppend: [className],
        css: [`.${className} div{color:red}`]
      }
    );
  });

  it('pseudo and nested', () => {
    const className = 'h-in-div-t-0';
    deepStrictEqual(
      classAppendAndCssFromStyle({
        '&:hover div': {
          top: 0
        }
      }),
      {
        classAppend: [className],
        css: [`.${className}:hover div{top:0}`]
      }
    );
  });

  it('autoprefixer false', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: false
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:flex}'
        ]
      }
    );
  }); // autoprefixer false

  /* it('autoprefixer true', () => {
    deepStrictEqual(
      classAppendAndCssFromStyle({
        display: 'flex'
      }, {
        autoprefixer: true
      }),
      {
        classAppend: ['d-f'],
        css: [
          '.d-f{display:-webkit-box;display:-ms-flexbox;display:flex}'
        ]
      }
    );
  }); // autoprefixer true */

  describe('float', () => {
    it('left', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'left' }, {
        autoprefixer: false
      }), {
        classAppend: ['f-l'],
        css: [
          '.f-l{float:left}'
        ]
      });
    });

    it('right', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'right' }), {
        classAppend: ['f-r'],
        css: [
          '.f-r{float:right}'
        ]
      });
    });

    it('none', () => {
      deepStrictEqual(classAppendAndCssFromStyle({ float: 'none' }), {
        classAppend: ['f-n'],
        css: [
          '.f-n{float:none}'
        ]
      });
    });
  }); // float

  it('abbreviations', () => {
    deepStrictEqual(classAppendAndCssFromStyle({
      animation: 'whatever',
      animationDelay: '0s',
      animationDirection: 'normal',
      animationDuration: '1s',
      animationFillMode: 'none',
      animationIterationCount: '1',
      animationName: 'whatever',
      animationPlayState: 'running',
      animationTimingFunction: 'start',
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      boxSizing: 'border-box',
      cursor: 'pointer',
      clear: 'both',
      fill: 'black',
      fontWeight: 100,
      lineHeight: 'normal',
      listStyle: 'none',
      listStyleImage: 'none',
      listStylePosition: 'inside',
      listStyleType: 'disc',
      margin: 0,
      outline: 'none',
      outlineColor: 'black',
      outlineStyle: 'solid',
      outlineWidth: 'medium',
      overflow: 'hidden',
      overflowWrap: 'break-word',
      overflowX: 'auto',
      overflowY: 'scroll',
      padding: 0,
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
      verticalAlign: 'middle',
      whiteSpace: 'nowrap'
    }), {
      classAppend: [
        'a-whatever',
        'ad-0s',
        'ar-n',
        'au-1s',
        'afm-n',
        'aic-1',
        'an-whatever',
        'aps-r',
        'atf-s',
        'bgc-t',
        'bs-s',
        'bsi-b',
        'cu-p',
        'cl-b',
        'fi-b',
        'fw-1',
        'lh-n',
        'lsa-n',
        'lsi-n',
        'lsp-i',
        'lst-d',
        'm-0',
        'ou-n',
        'ou-c-b',
        'ou-s-s',
        'ou-w-m',
        'ov-h',
        'ovw-b',
        'ovx-a',
        'ovy-s',
        'pa-0',
        'pe-n',
        'p-a',
        'td-n',
        'tdc-b',
        'tdl-u',
        'tds-s',
        'tra-a',
        'tde-2s',
        'tdu-1s',
        'tp-all',
        'ttf-eio',
        'va-m',
        'ws-nw'
      ],
      css: [
        '.a-whatever{animation:whatever}',
        '.ad-0s{animation-delay:0s}',
        '.ar-n{animation-direction:normal}',
        '.au-1s{animation-duration:1s}',
        '.afm-n{animation-fill-mode:none}',
        '.aic-1{animation-iteration-count:1}',
        '.an-whatever{animation-name:whatever}',
        '.aps-r{animation-play-state:running}',
        '.atf-s{animation-timing-function:start}',
        '.bgc-t{background-color:transparent}',
        '.bs-s{border-style:solid}',
        '.bsi-b{box-sizing:border-box}',
        '.cu-p{cursor:pointer}',
        '.cl-b{clear:both}',
        '.fi-b{fill:black}',
        '.fw-1{font-weight:100}',
        '.lh-n{line-height:normal}',
        '.lsa-n{list-style:none}',
        '.lsi-n{list-style-image:none}',
        '.lsp-i{list-style-position:inside}',
        '.lst-d{list-style-type:disc}',
        '.m-0{margin:0}',
        '.ou-n{outline:none}',
        '.ou-c-b{outline-color:black}',
        '.ou-s-s{outline-style:solid}',
        '.ou-w-m{outline-width:medium}',
        '.ov-h{overflow:hidden}',
        '.ovw-b{overflow-wrap:break-word}',
        '.ovx-a{overflow-x:auto}',
        '.ovy-s{overflow-y:scroll}',
        '.pa-0{padding:0}',
        '.pe-n{pointer-events:none}',
        '.p-a{position:absolute}',
        '.td-n{text-decoration:none}',
        '.tdc-b{text-decoration-color:black}',
        '.tdl-u{text-decoration-line:underline}',
        '.tds-s{text-decoration-style:solid}',
        '.tra-a{transition:all}',
        '.tde-2s{transition-delay:.2s}',
        '.tdu-1s{transition-duration:1s}',
        '.tp-all{transition-property:all}',
        '.ttf-eio{transition-timing-function:ease-in-out}',
        '.va-m{vertical-align:middle}',
        '.ws-nw{white-space:nowrap}'
      ]
    });
  }); // abbreviations
}); // css
