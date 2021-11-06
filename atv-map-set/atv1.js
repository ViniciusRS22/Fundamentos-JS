function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Paixão', 'Admin');
users.set('Stephany', 'Admin');
users.set('Ana', 'User');
users.set('Bolinho', 'Admin');
users.set('Caio', 'User');

console.log(getAdmins(users));