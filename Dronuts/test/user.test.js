//Tests for the user model
test('User Initialization Test', ( ) => {
    var loopback = require('loopback');

    const user1 = loopback.createModel({
            name: 'User',
            properties: {
                user_id : '1',
                email : 'rnb@gmail.com',
                password : 'fakePassword',
                role : 'admin'
            }
    });
    //console.log(user1.properties);
    //expect(user1).not.toBeNull();
    //expect(user1).toBeDefined();
    //expect(user1).toBeModel();
    //expect(user1).toHavePropertyOfType('user_id', String);
    ////console.log(user1);
    //expect(user1.user_id).toBeDefined();
    //expect(user1.user_id).toBe('1');
    //expect(user1.email).toBe('rnb@gmail.com');
    //expect(user1.password).toBe('fakePassword');
   // expect(user1.role).toBe('admin');
});

test('Incorrect User Initialization Test', ( ) => {
    var loopback = require('loopback');

    const user1 = loopback.createModel({
            name: 'User',
            properties: {
                user_id : '2',
                password : 'fakePassword',
                role : 'admin'
            }
    });
    //expect(user1).toBeUndefined();

});