module.exports = {
    path: 'contract-list',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../../views/ContractList'))
        },"contract-list")
    }
}
