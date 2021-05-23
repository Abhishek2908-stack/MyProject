import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fixedValue1=100000;
  fixedValue2=300000;
  numV = 0;
  numValue: number = 0;
  options: Options = {
    floor: 100000,
    ceil: 300000
  };
  numValue2: number = 0;
  options2: Options = {
    floor: 0,
    ceil: 0,
    animate: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

  onChangeYear(event: any){
   this.options2 = {
     floor: 0,
     ceil: event.value
   }
    console.log(event.value)
  }

}
