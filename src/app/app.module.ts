import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import {NativeScriptFormsModule, NativeScriptModule} from '@nativescript/angular'
// import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import {CurrentChallengeComponent} from "~/app/Challenges/current-challenge/current-challenge.component";
// import { ItemsComponent } from './item/items.component'
// import { ItemDetailComponent } from './item/item-detail.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [AppComponent, CurrentChallengeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
