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