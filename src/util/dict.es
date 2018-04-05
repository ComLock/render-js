export const dict = arr => Object.assign(...arr.map(([k, v]) => ({ [k]: v })));
