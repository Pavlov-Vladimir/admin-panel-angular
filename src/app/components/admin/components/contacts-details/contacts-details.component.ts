import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss'],
})
export class ContactsDetailsComponent implements OnInit {
  id!: number;
  person!: Observable<User>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.person = this.activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
