const js2xmlparser = require("js2xmlparser");

class Address {
    constructor() {
        this.street = 'Main St';
        this.house_number = 123;
        this.zip_code = '12345';
        this.distrct_name = 'Downtown';
        this.city = 'New York';
        this.country = 'USA';
    }

    getStreet() {
        return this.street;
    }

    getHouseNumber() {
        return this.house_number;
    }

    getZipCode() {
        return this.zip_code;
    }

    getDistrictName() {
        return this.distrct_name;
    }

    getCity() {
        return this.city;
    }

    getCountry() {
        return this.country;
    }
}

class Car {
    constructor() {
        this.model_name = 'Corolla';
        this.brand_name = 'Toyota';
        this.year = 2020;
    }

    getModelName() {
        return this.model_name;
    }

    getBrandName() {
        return this.brand_name;
    }

    getYear() {
        return this.year;
    }
}

class Pet {
    constructor() {
        this.name;
        this.type;
        this.breed;
        this.age;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setType(type) {
        this.type = type;
        return this;
    }

    setBreed(breed) {
        this.breed = breed;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getBreed() {
        return this.breed;
    }

    getAge() {
        return this.age;
    }
}

class InfamousJohn {
    constructor() {
        const pet1 = new Pet();
        const pet2 = new Pet();

        pet1.setName('Fluffy').setType('Cat').setBreed('Persian').setAge(5);
        pet2.setName('Rex').setType('Dog').setBreed('German Shepherd').setAge(3);

        this.first_name = 'John';
        this.last_name = 'Doe';
        this.birthdate = '01.01.1990';
        this.age = 30;
        this.gender = 'M';
        this.nationality = 'Internationalist';
        this.is_married = false;
        this.has_children = false;
        this.hobbies = ['Reading', 'Coding', 'Traveling'];
        this.address = new Address();
        this.car = new Car();
        this.favorite_tv_shows = ['The Simpsons', 'Breaking Bad', 'Game of Thrones'];
        this.pets = [pet1, pet2];
    }

    getFirstName() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name;
    }

    getBirthdate() {
        return this.birthdate;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }

    getNationality() {
        return this.nationality;
    }

    getIsMarried() {
        return this.is_married;
    }

    getHasChildren() {
        return this.has_children;
    }

    getHobbies() {
        return this.hobbies;
    }

    getAddress() {
        return this.address;
    }

    getCar() {
        return this.car;
    }

    getFavoriteTvShows() {
        return this.favorite_tv_shows;
    }

    getPets() {
        return this.pets;
    }
}


const me = new InfamousJohn();

// {
//   first_name: 'John',
//   last_name: 'Doe',
//   birthdate: '01.01.1990',
//   age: 30,
//   gender: 'M',
//   nationality: 'Internationalist',
//   is_married: false,
//   has_children: false,
//   hobbies: [ 'Reading', 'Coding', 'Traveling' ],
//   address: Address {
//     street: 'Main St',
//     house_number: 123,
//     zip_code: '12345',
//     distrct_name: 'Downtown',
//     city: 'New York',
//     country: 'USA'
//   },
//   car: Car { model_name: 'Corolla', brand_name: 'Toyota', year: 2020 },
//   favorite_tv_shows: [ 'The Simpsons', 'Breaking Bad', 'Game of Thrones' ],
//   pets: [
//     Pet { name: 'Fluffy', type: 'Cat', breed: 'Persian', age: 5 },
//     Pet { name: 'Rex', type: 'Dog', breed: 'German Shepherd', age: 3 }
//   ]
// }
console.log(me);

// Exercise 1-1
console.log(me.getFirstName());

// Exercise 1-2
console.log(me.getLastName());

// Exercise 1-3
console.log(me.getHobbies());

// Exercise 1-4
console.log(me.getAddress().getStreet());

// Exercise 1-5
console.log(me.getPets()[1].getName());

// Excersie 1-6 - Bonus :)
const xml = js2xmlparser.parse("InfamousJohn", me);
console.log(xml);