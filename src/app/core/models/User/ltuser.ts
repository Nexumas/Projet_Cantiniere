export class Ltuser {
  public _email: string;
  private _username: string;
  private _firstName: string;
  private _sex: number;

  constructor(email: string, username: string, firstName: string, sex: number) {
    this._email = email;
    this._username = username;
    this._firstName = firstName;
    this._sex = sex;
  }

  get sex(): number {
    return this._sex;
  }

  set sex(value: number) {
    this._sex = value;
  }

  get email(): string {
    return this.email;
  }

  set email(value: string) {
    this.email = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }
}


