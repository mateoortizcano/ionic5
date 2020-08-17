import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then(m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then(m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridPageModule)
  },
  {
    path: 'infinitescroll',
    loadChildren: () => import('./pages/infinitescroll/infinitescroll.module').then(m => m.InfinitescrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then(m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'list-reoder',
    loadChildren: () => import('./pages/list-reoder/list-reoder.module').then(m => m.ListReoderPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./pages/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
