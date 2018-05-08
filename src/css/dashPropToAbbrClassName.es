import {CSS_PROP_TO_ABBR} from './properties.es';
import {toClassName} from './toClassName.es';


export function dashPropToAbbrClassName(dashProp) {
  return CSS_PROP_TO_ABBR[dashProp] || toClassName(dashProp);
}
