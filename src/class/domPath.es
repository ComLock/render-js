//import {print as inspect} from 'q-i';
import {PROP_CONTENT, PROP_TAG} from './element.es';
import {isArray} from '../util/isArray.es';


export function domPath(element, path) {
  //inspect({domPath: {element, path}});
  //inspect({path});
  const pathObj = {};
  const contentArr = isArray(element[PROP_CONTENT]) ?
    element[PROP_CONTENT] : [element[PROP_CONTENT]];
  const arr = isArray(element) ? element : contentArr;
  for (let i = 0; i < arr.length; i += 1) {
    const anElement = arr[i]; //inspect({anElement});
    if (anElement[PROP_TAG]) {
      const childTag = anElement[PROP_TAG];
      if (isArray(pathObj[childTag])) {
        pathObj[childTag].push(anElement); // reference
      } else if (pathObj[childTag]) {
        pathObj[childTag] = [pathObj[childTag], anElement]; // reference
      } else {
        pathObj[childTag] = anElement; // reference
      }
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
