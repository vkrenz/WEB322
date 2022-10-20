/**
 * @desc Testing User Object Member Functions
 */

const user = {
    fullname: null,
    username: null,
    age: null,
    gender: null,
    occupation: null,
    setFullName: newFullName => this.fullname,
    setUserName: newName => this.name = newName,
    setAge: newAge => this.age = newAge,
    setGender: newGender => this.gender = newGender,
    setOccupation: newOccupation => this.occupation = newOccupation,
    getFullName: () => this.fullname,
    getUserName: () => this.name,
    getAge: () => this.age,
    getGender: () => this.gender == 'M' ? "Male" : "Female",
    getOccupation: () => this.occupation
}

user.setGender('M')
console.log(user.getGender())