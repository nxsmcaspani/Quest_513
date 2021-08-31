import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopoeias',
  templateUrl: './onomatopoeias.component.html',
  styleUrls: ['./onomatopoeias.component.css']
})
export class OnomatopoeiasComponent implements OnInit {
  public onomatopoeias:string[];
  constructor() { }

  ngOnInit(): void {
  }

  onReceiveNewOnomatopia(onomatopoeia:string) : void {
    this.onomatopoeias.push(onomatopoeia);
  }
}
