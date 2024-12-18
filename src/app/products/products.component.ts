import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword:String="";
  constructor() {
  }
  ngOnInit() {
    this.products=[
      {"id":1,"name":"computer","price":4300},
      {"id":2,"name":"Printer","price":3200},
      {"id":3,"name":"Smartphone","price":1253},
      {"id":4,"name":"Mouse","price":250}
    ];
  }

  deletProduct(p: any) {
    let index=this.products.indexOf(p);
    this.products.splice(index,1)
  }

  search() {
    console.log(this.keyword);
    let result=[];
    for (let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products=result;
  }
}
