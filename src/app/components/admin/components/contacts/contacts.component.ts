import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  personalList!: Observable<User[]>;

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.personalList = this.activatedRouter.data.pipe(
      map((data) => data?.['users'])
    );
  }
}
