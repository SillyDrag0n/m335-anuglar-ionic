import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'navigationdetail',
    loadChildren: () => import('./navigation-detail/navigation-detail.module').then( m => m.NavigationDetailPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./numbers/numbers.module').then( m => m.NumbersPageModule)
  },
  {
    path: 'string',
    loadChildren: () => import('./string/string.module').then( m => m.StringPageModule)
  },
  {
    path: 'objects',
    loadChildren: () => import('./objects/objects.module').then( m => m.ObjectsPageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then( m => m.DataBindingPageModule)
  },
  {
    path: 'rechner',
    loadChildren: () => import('./rechner/rechner.module').then( m => m.RechnerPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
