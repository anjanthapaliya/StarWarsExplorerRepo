import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { Router, RouterModule } from '@angular/router';

export const routing = RouterModule.forRoot([    
    { path: ':id', component: FilmdetailsComponent},
    { path: '**', redirectTo: '' },
    ]);