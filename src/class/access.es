import {addClass} from './addClass.es';
import {addContent} from './addContent.es';
import {addStyle} from './addStyle.es';
import {domPath} from './domPath.es';

import {getAttribute} from './getAttribute.es';
import {getAttributes} from './getAttributes.es';
import {getContent} from './getContent.es';
import {getMedia} from './getMedia.es';
import {getStyle} from './getStyle.es';

import {setAttribute} from './setAttribute.es';
import {setAttributes} from './setAttributes.es';
import {setContent} from './setContent.es';
import {setMedia} from './setMedia.es';
import {setStyle} from './setStyle.es';


export function access(ref, path = null) {
  const element = path ? domPath(ref, path) : ref;

  // Arrow functions has no this, so make obj instead.
  const obj = {element};
  obj.addClass = classes => {
    addClass(element, classes);
    return obj; // Chainable
  };

  obj.addContent = content => {
    addContent(element, content);
    return obj; // Chainable
  };

  obj.addStyle = style => {
    addStyle(element, style);
    return obj; // Chainable
  };

  obj.getAttribute = name => getAttribute(element, name);
  obj.getAttributes = () => getAttributes(element);
  obj.getContent = () => getContent(element);
  obj.getMedia = () => getMedia(element);
  obj.getStyle = () => getStyle(element);

  obj.setAttribute = (name, value) => {
    setAttribute(element, name, value);
    return obj; // Chainable
  };

  obj.setAttributes = attributes => {
    setAttributes(element, attributes);
    return obj; // Chainable
  };

  obj.setContent = content => {
    setContent(element, content);
    return obj; // Chainable
  };

  obj.setMedia = media => {
    setMedia(element, media);
    return obj; // Chainable
  };

  obj.setStyle = style => {
    setStyle(element, style);
    return obj; // Chainable
  };

  return obj; // Chainable
} // export function access
