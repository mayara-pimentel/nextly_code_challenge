import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paint-bucket',
  templateUrl: './paint-bucket.component.html',
  styleUrls: ['./paint-bucket.component.scss']
})
export class PaintBucketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paint(pixel: string, character: string): void {
    console.log(pixel)
    console.log(character)

  }

}
