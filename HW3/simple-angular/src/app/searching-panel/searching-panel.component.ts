import {Component, EventEmitter, Output} from '@angular/core';
import {data, Data} from "../sampleJson";

@Component({
  selector: 'app-searching-panel',
  templateUrl: './searching-panel.component.html',
  styleUrls: ['./searching-panel.component.scss']
})
export class SearchingPanelComponent {
  @Output() productsFiltered = new EventEmitter<Data[]>();
  @Output() eventText = new EventEmitter<String>();
  text: string = "";
  enteredText: string = "";
  products : Data[] = data;
  save(){
    if (!this.text){
      this.productsFiltered.emit(this.products);
      return;
    }

    const filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.text.toLowerCase())
    );

    this.productsFiltered.emit(filteredProducts);
    this.eventText.emit(this.text);
  }
}
