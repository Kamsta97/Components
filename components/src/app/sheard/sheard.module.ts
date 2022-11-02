import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button/button.component";
import { HeaderComponent } from "./components/header/header.component";
import { InfoComponent } from "./components/info/info.component";
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonComponent,
    InfoComponent,
    HeaderComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [],
  exports: [ButtonComponent]
})
export class SheardModule { }
