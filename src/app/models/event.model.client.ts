export class Event {
  _id?: String;
  name: String;
  orgId: String;
  description: String;

  constructor(_id, name, orgId) {
    this._id = _id;
    this.name = name;
    this.orgId = orgId;
  }
}
