import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User[]> {
  constructor(private adminService: AdminService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(delay(1000));
  }
}
