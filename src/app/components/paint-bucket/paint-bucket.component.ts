import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-paint-bucket',
  templateUrl: './paint-bucket.component.html',
  styleUrls: ['./paint-bucket.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaintBucketComponent implements OnInit {
  html: string;
  multidimensionalArray = [
    ['.', '#', '#', '#', '.', '.' ],
    ['.', '#', '.', '.', '#', '.' ],
    ['.', '#', '#', '#', '.', '.' ],
    ['.', '#', '.', '.', '.', '.' ]
  ];

  // 4x6
  PIXEL_X = 4;
  PIXEL_Y = 6;

  constructor() { }

  ngOnInit(): void {
    this.generateTableHtml();
  }

  paint(pixel: string, newColor: string): void {
    // pixel example: '1,3'
    let x = Number(pixel[0]);
    let y = Number(pixel[2]);
    let previousColor = this.multidimensionalArray[x][y];
    if (previousColor == newColor) return;
    this.floodFill(x, y, previousColor, newColor);
    this.generateTableHtml();
  }

  /**
   * I am using the flood fill algorithm to solve the paint bucket challenge
   */
  floodFill(x: number, y: number, previousColor: string, newColor: string) {
    if (x < 0 || x >= this.PIXEL_X || y < 0 || y >= this.PIXEL_Y) return;
    if (this.multidimensionalArray[x][y] != previousColor) return;
       
    // Replace the color at [x], [y]
    this.multidimensionalArray[x][y] = newColor;
   
    // Recursion => north, east, south and west
    this.floodFill(x + 1, y, previousColor, newColor);
    this.floodFill(x - 1, y, previousColor, newColor);
    this.floodFill(x, y + 1, previousColor, newColor);
    this.floodFill(x, y - 1, previousColor, newColor);
  }

  generateTableHtml(): void {
    let table = document.createElement('table');
    table.className = 'table-2d';

    for (var i = 0; i < this.PIXEL_X; i++) {
      let tr = document.createElement('tr');

      for (var j = 0; j < this.PIXEL_Y; j++) {
        let td = document.createElement('td');
        td.append(this.multidimensionalArray[i][j] + " ");
        tr.append(td);
      }
      table.append(tr);
    }

    this.html = table.outerHTML;
  }

  resetArray(): void {
    this.multidimensionalArray = [
      ['.', '#', '#', '#', '.', '.' ],
      ['.', '#', '.', '.', '#', '.' ],
      ['.', '#', '#', '#', '.', '.' ],
      ['.', '#', '.', '.', '.', '.' ]
    ];
    this.generateTableHtml();
  }

}
