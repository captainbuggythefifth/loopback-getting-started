module.exports = function (Client) {
    Client.validatesPresenceOf('email', 'password', 'firstName', 'lastName', 'birthday');
    Client.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
    /*Client.validatesInclusionOf('gender', {in: ['male', 'female']});
    Client.validatesExclusionOf('domain', {in: ['www', 'billing', 'admin']});
    Client.validatesNumericalityOf('age', {int: true});*/
    Client.validatesUniquenessOf('email', {message: 'email is not unique'});    
};

