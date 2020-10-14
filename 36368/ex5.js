function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers
            .every(suser => goodUsers
                .some(guser => guser.id === suser.id))
    };
}

module.exports = checkUsersValid