import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { profileLoad, profileUpdate } from './store/profile.actions';
import { selProfile, selProfileId } from '../../auth/store';
import { map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<any>) {

    this.preLoadData();
  }

  preLoadData() {
    this.store.select(selProfileId)
      .pipe(
        tap(profileId => this.store.dispatch(profileLoad({ payload: { _id: profileId } }))),
        mergeMap(() => this.store.select(selProfile))
      ).subscribe();
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required]
    });

  }

  onSubmit() {
    this.store.select(selProfileId)
      .subscribe((profileId) => {
        const payload = this.profileForm.getRawValue();
        payload.id = profileId;
        this.store.dispatch(profileUpdate({ payload }));
      });

  }

}
