import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceChannel } from 'src/app/models/pricechannel.model';

@Component({
  selector: 'app-book-price-edit-list',
  templateUrl: './book-price-edit-list.component.html',
  styleUrls: ['./book-price-edit-list.component.scss']
})
export class BookPriceEditListComponent {

  title = 'Preços por cannal';
  isEditing: boolean = false;
  @Input() records?: PriceChannel[] = [];
  @Output() addNewItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { } 
  
  edit(){
    this.isEditing = true;
  }

  save() {
    this.isEditing = false;
    console.log(this.records);
    this.addNewItem.emit(this.records);
  }
  addLine() {
    this.records?.push(
      {
        channel: '',
        price: 0
      }
    )
    this.isEditing = true;
  } 
}
