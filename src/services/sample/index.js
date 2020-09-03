const _ = require('lodash')

module.exports = {
    microservices: [{
        key: 'get-scaffold-app-version',
        path: '/api/version',

        handle: async () => {
            return process.env.npm_package_dependencies__dlillyatx_scaffold
        }
    }]
}