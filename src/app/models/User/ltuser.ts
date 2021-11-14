export class Ltuser {
  public email: string;
  public token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }

  get getEmail(): string {
    return this.email;
  }

  get getToken(): string {
    return this.token;
  }

  set setEmail(value: string) {
    this.email = value;
  }

  set setToken(value: string) {
    this.token = value;
  }
}


