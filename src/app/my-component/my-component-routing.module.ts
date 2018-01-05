import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponentComponent} from "./my-component.component";

const routes: Routes = [
    { path: '', component: MyComponentComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class MyComponentRoutingModule { }

export const routingComponents = [ MyComponentComponent];