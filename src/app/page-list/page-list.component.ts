import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages : any[] = []; //need to define pages as an array of type 'any' to work

  constructor() {}

  ngOnInit(): void {}
}