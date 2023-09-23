import {Component, Input, OnInit} from '@angular/core';
import {Data, data} from "../sampleJson";


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit{
  @Input() result: string = "";
  filteredProducts: Data[] = [];
  products: Data[] = data;
  notFoundMessage: string = "";
  res(){
    console.log(this.result)
    console.log(this.filteredProducts)
  }

  ngOnInit(): void {
    this.filteredProducts = this.products;
    console.log(this.filteredProducts);
  }
  onProductsFound(products: Data[]) {
    this.filteredProducts = products;
    if(this.filteredProducts.length != 0){
      this.notFoundMessage = "";
    }
    console.log(this.filteredProducts)
  }
  textWarning(text: String){
    if(this.filteredProducts.length == 0){
      this.notFoundMessage = "did not find anything on " + text;
    }

  }
}
