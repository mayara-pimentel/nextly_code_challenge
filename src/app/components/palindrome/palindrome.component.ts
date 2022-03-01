import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {
  inputDefault: string = 'Arara';
  isCurrentStringAPalindrome?: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isPalindrome(this.inputDefault);
  }

  /**
   * Checks if a word/sentence is palindrome or not.
   * @param str
   * @returns boolean
   */
  isPalindrome(str: string): boolean {
    // Regex to remove unwanted characters
    const regex = /[^A-Za-z0-9]/g;
    const lowerCaseStr = str.toLowerCase().replace(regex, '')
    const reverseStr = lowerCaseStr.split('').reverse().join('');
    this.isCurrentStringAPalindrome = lowerCaseStr === reverseStr;
    return this.isCurrentStringAPalindrome;
  }

}
