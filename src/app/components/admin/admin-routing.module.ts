import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { UserResolver } from './resolvers/user.resolver';
import { UsersResolver } from './resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'contacts',
        component: ContactsComponent,
        resolve: {
          users: UsersResolver,
        },
      },
      { path: 'contacts/users', redirectTo: 'contacts', pathMatch: 'full' },
      {
        path: 'contacts/users/:id',
        component: ContactsDetailsComponent,
        resolve: {
          user: UserResolver,
        },
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
