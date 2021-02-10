import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/components.module')
      .then(mod => mod.ComponentsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module')
      .then(mod => mod.ServicesModule)
  },
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/template-driven-forms/template-driven-forms.module')
      .then(mod => mod.TemplateDrivenFormsModule)
  },
  {
    path: 'chartjs',
    loadChildren: () => import('./modules/application/chartjs/chartjs.module')
      .then(mod => mod.ChartjsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }