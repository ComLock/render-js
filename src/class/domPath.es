/* eslint-disable import/prefer-default-export */

//import {print as inspect} from 'q-i';
import {PROP_CONTENT, PROP_TAG} from './element.es';
import {isArray} from '../util/isArray.es';


export function domPath(element, path) {
  //inspect({domPath: {element, path}});
  //inspect({path});
  if (!element[PROP_CONTENT]) { return null; }

  const contentArr = isArray(element[PROP_CONTENT]) ?
    element[PROP_CONTENT] : [element[PROP_CONTENT]];

  const pathObj = {};
  for (let i = 0; i < contentArr.length; i += 1) {
    const item = contentArr[i];
    const childTag = item[PROP_TAG];
    if (isArray(pathObj[childTag])) {
      pathObj[childTag].push(item); // reference
    } else if (pathObj[childTag]) {
      pathObj[childTag] = [pathObj[childTag], item]; // reference
    } else {
      pathObj[childTag] = item; // reference
    }
  } // for
  //inspect({pathObj});

  const parts = path.split('.');
  const currentPart = parts.shift(); //inspect({currentPart});
  const brackets = currentPart.split('['); //inspect({brackets});
  let child;
  if (brackets.length > 1) {
    //child = eval(`pathObj.${currentPart}`); // NOTE eval can be harmful, so this avoids it:
    const a = brackets[0]; //inspect({a});
    const b = brackets[1].substring(0, brackets[1].length - 1); //inspect({b});
    child = pathObj[a][b];
  } else {
    child = pathObj[currentPart];
  }
  //inspect({child});
  if (!child) { return null; }
  if (!parts.length) { return child; } // reference
  return domPath(child, parts.join('.')); // recurse
} // export function domPath
