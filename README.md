[![Maintainability](https://api.codeclimate.com/v1/badges/293e99309826741b92d4/maintainability)](https://codeclimate.com/github/onebeyond/systemic-domain-runner/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/293e99309826741b92d4/test_coverage)](https://codeclimate.com/github/onebeyond/systemic-domain-runner/test_coverage)

# Systemic Domain Runner
Starts [systemic](https://github.com/guidesmiths/systemic) systems within a domain

## TL;DR
```js
const Systemic = require('systemic')
const runner = require('systemic-domain-runner')

const system = new Systemic()
    .add('config', { foo: 1, bar: 2 })
    .add('app', require('./my-app'))
        .dependsOn('config')

runner(system).start((err, components) => {
    if (err) throw err
    console.log('Started')
})
```
## Features
* Shutsdown the system on unhandled errors
* Uses [system-service-runner](https://github.com/guidesmiths/systemic-service-runner) as the underlying runner by default

## Usage
```
runner(<system>, [<options>]).start(<cb>)
```

### Default options
```js
{
    logger: console,
    runner: require('systemic-service-runner')
}
```
