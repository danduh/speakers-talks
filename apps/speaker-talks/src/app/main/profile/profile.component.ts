import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { profileLoad, profileUpdate } from './store/profile.actions';
import { selProfile } from '../../auth/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<any>) {
    this.store.select(selProfile)
      .pipe(
        tap(console.log)
      )
      .subscribe();
  }

  ngOnInit() {
    this.store.dispatch(profileLoad({ username: 'someusername' }));
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required]
    });

  }

  onSubmit() {
    this.store.dispatch(profileUpdate(this.profileForm.getRawValue()));
  }

}
