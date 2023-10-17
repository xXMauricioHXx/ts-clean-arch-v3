export class Email {
  private value: string;
  constructor(email: string) {
    this.value = email;
  }

  validate() {
    // not implemented
  }

  getValue() {
    return this.value;
  }
}
