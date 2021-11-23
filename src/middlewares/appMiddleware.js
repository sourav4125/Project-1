const validateAppType = function(req, res, next){
    let appTypeHeader = req.headers['isfreeapp']
    let isAppFree
    if(!appTypeHeader) {
        return res.send({message: 'Mandatory header missing'})
    }

    if(appTypeHeader === 'false') {
        isAppFree = false
    } else {
        isAppFree = true
    }
    req.isFreeAppUser = isAppFree

    next()
}

module.exports.validateAppType = validateAppType