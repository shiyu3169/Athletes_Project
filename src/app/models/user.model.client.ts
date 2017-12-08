export class User {
  _id?: String;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  role: String;
  gender: String;
  organization?: String;
  intro: String;

  constructor(_id, username, password, firstName, lastName, email, role, gender, organization, intro) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.gender = gender;
    this.organization = organization;
    this.intro = intro;
  }
}
