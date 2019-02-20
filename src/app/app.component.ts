import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive & databinding';

  property_binding = 'test property binding';


  btnEventData;


  twoWayDataBinding = '';


  ngIfVar = true;

  ngForVar = [ 'Amla', 'MRR', 'Artifi' ];


  ngSwitchKey = 'Amla';


  isActive = true;
  isDisabled = false;

  btnEvent(evt) {
    console.log(evt);
    this.btnEventData = evt.target;
  }


  toggleNgIf(){
    this.ngIfVar = !this.ngIfVar;
  }


  toggleNgSwitch() {
    console.log(this.ngSwitchKey);
    if (this.ngSwitchKey == null){
      this.ngSwitchKey = 'Amla';
    } else if (this.ngSwitchKey == 'Amla') {
      this.ngSwitchKey = 'MRR';
    } else if(this.ngSwitchKey == 'MRR') {
      this.ngSwitchKey = 'Artifi';
    } else if(this.ngSwitchKey == 'Artifi') {
      this.ngSwitchKey = null;
    }
  }


  togglengClass(){
    if(this.isActive){
      this.isActive = false;
      this.isDisabled = true;
    } else {
      this.isActive = true;
      this.isDisabled = false;
    }
  }

}
