import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'password';
  length = 0;
  ifLetter: boolean = false;
  ifNumber: boolean = false;
  ifSymbol: boolean = false;
  password: string = '';
  message: string = '';

  onChangeLength(value: string) {
    if (value == null) return;
    const parseValue = parseInt(value);
    if (!isNaN(parseValue)) {
      this.length = parseValue;
    } else {
      this.length = 0;
    }
    this.generatePassword();
    console.log('Input Value:', value);
  }

  useLetter() {
    this.ifLetter = !this.ifLetter;
    this.generatePassword();
  }
  useNumber() {
    this.ifNumber = !this.ifNumber;
    this.generatePassword();
  }
  useSymbol() {
    this.ifSymbol = !this.ifSymbol;
    this.generatePassword();
  }

  generatePassword = () => {
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const symbol = '!@#$%^&*()';
    let validChars: string = '';

    if (!(this.ifLetter || this.ifNumber || this.ifSymbol) && !length) {
      // console.log('invalid inputs');
      this.message = 'invalid inputs';
      return;
    }

    if (this.ifLetter) {
      validChars += letter;
    }
    if (this.ifNumber) {
      validChars += number;
    }
    if (this.ifSymbol) {
      validChars += symbol;
    }

    let randomPassword = '';
    for (let i = 0; i < this.length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      randomPassword += validChars[randomIndex];
    }
    this.password = randomPassword;
    this.message = '';
    this.printCondition();

    // return this.password;
  };

  printCondition() {
    console.log('Length:', this.length);
    console.log('Use Letters:', this.ifLetter);
    console.log('Use Numbers:', this.ifNumber);
    console.log('Use Symbols:', this.ifSymbol);
  }
}
