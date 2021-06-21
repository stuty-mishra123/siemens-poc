import { Component } from '@angular/core';
import { LIST1 } from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Stuty's technical assigment";
  list1 = LIST1;
  selectedData: Array<any>= [];
  List2 : Array<any> = [];
  selectedData2: Array<any> = [];

  selectList1Data(data){
    this.selectedData.push(data);
  }
  selectList2Data(data){
    this.selectedData2.push(data);
  }

  moveToList2(){
    this.selectedData.forEach(element => {
      element.selected = false;
    });
    this.List2 = this.List2.concat(this.selectedData);
    this.list1 = this.list1.filter(obj => {
      return this.List2.indexOf(obj) < 0;
    });

    this.selectedData = [];
  }
  moveToList1(){
    this.selectedData2.forEach(element => {
      element.selected = false;
    });
    this.list1 = this.list1.concat(this.selectedData2);
    this.List2 = this.List2.filter(obj1 => {
      return this.list1.indexOf(obj1) < 0;
    });

    this.selectedData2 = [];
  }
}
