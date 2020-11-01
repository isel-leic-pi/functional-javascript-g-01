'use strict'

function checkUsersValid(goodUsers){
    return function allValid(users){
        return users.every(function(user){
            return goodUsers.some(function(goodUser){
                return user.id === goodUser.id
            })
        })
    }
}

module.exports = checkUsersValid