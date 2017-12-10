import DateTimeFormat = Intl.DateTimeFormat;

export class Event {
  _id?: String;
  name: String;
  orgId: String;
  description: String;
  address: String;
  city: String;
  state: String;
  time: DateTimeFormat;

  constructor(_id, name, orgId, description, address, city, state, time) {
    this._id = _id;
    this.name = name;
    this.orgId = orgId;
    this.description = description;
    this.address = address;
    this.city = city;
    this.state = state;
    this.time = time;
  }
}
