import {CSS_PROP_VALUES_TO_ABBR} from './properties.es';
import {toClassName} from './toClassName.es';


export function valueDashPropToAbbrClassName(value, dashProp) {
  return (CSS_PROP_VALUES_TO_ABBR[dashProp] && CSS_PROP_VALUES_TO_ABBR[dashProp][value]) || toClassName(value);
}
