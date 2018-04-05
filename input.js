/* eslint-disable no-param-reassign */
import {camelize} from './src/util/camelize.es';
import {INPUT_TYPES, inputFn} from './src/html/input.es';


export {INPUT_TYPES_WITHOUT_KNOWN_CONFLICTS} from './src/html/input.es';

INPUT_TYPES.forEach(t => {
  exports[camelize(t)] = inputFn(t);
});

export default exports;
