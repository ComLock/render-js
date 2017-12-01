# enonic-xp-lib-render-es2015

# Vision / goal

I would like to create a render library that can be used both server/client -side. Which means it must be javascript.

It will be written using es2015 which makes for much nicer code for instance template strings.

See [doc/server-side.es6](doc/server-side.es6) for an example of how I want a render to look like.

# Definition

* All element methods take between, zero and two params.
* There are three types of allowed param types:
  * String
  * Array of String
  * Object
* The order of the params does not matter.
* If you call it using two params, one of them must be of type Object.

## Examples

### el('string')

    <el>string</el>

### el(['string', 'anotherString'])

    <el>string
    anotherString</el>

### el({key: 'value'})

    <el key="value"/>

### el({key: 'value'}, 'string')

    <el key="value">string</el>

### el('string', {key: 'value'})

    <el key="value">string</el>
