//como era antes

function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('David', 20, 'MX');

//nueva forma en EM6

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');