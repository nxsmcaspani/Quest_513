import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopoeias',
  templateUrl: './create-onomatopoeias.component.html',
  styleUrls: ['./create-onomatopoeias.component.css']
})
export class CreateOnomatopoeiasComponent implements OnInit {
  public newOnomatopoeia:string;
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  sendOnomatopiaToParent:EventEmitter<any> = new EventEmitter();

  public createOnomatopoeia() : void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopoeia);
  }
}
