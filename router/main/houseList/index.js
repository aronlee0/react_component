module.exports = {
    path: 'house-list',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../../views/HouseList'))
        },"house-list")
    }
}
