class User {
  constructor(id, credentials, firstName, lastName, role, experience) {
    this.id = id;
    this.isActive = true;
    this.credentials = credentials;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.experience = experience;
  }
}

module.exports = User;
