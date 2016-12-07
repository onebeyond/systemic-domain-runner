var domain = require('domain').create()

module.exports = function(system, options) {

    if (!system) throw new Error('system is required')

    var logger = options && options.logger || console
    var underlyingRunner

    function start(cb) {

        domain.on('error', function(err){
            logger.error('Unhandled domain exception. Invoking shutdown.')
            if (err) logger.error(err.stack)
            underlyingRunner.stop(function() {
                process.exit(1)
            })
        })

        domain.run(function() {
            underlyingRunner = (options && options.runner || require('systemic-service-runner'))(system, options)
            underlyingRunner.start(cb)
        })
    }

    function stop(cb) {
        if (!underlyingRunner) return cb()
        underlyingRunner.stop(cb)
    }

    return {
        start: start,
        stop: stop
    }
}
