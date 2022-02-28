import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent {

  isCurrentStringAPalindrome?: boolean;

  constructor() { }

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
