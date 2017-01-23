module.exports = {
    path: 'main',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../views/Main'))
        },"main")
    },
    childRoutes: [
        require('./contractList'),
        require('./houseList')
    ]
}
