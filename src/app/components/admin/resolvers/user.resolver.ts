import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, delay, EMPTY, Observable } from 'rxjs';
import { User } from '../models/user';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  constructor(private adminService: AdminService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.adminService.getPerson(route.params?.['id']).pipe(
      delay(1000),
      catchError(() => {
        this.router.navigate(['admin/contacts']);
        return EMPTY;
      })
    );
  }
}
