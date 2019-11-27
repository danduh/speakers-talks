import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnDestroy {
  contactFabButton: any;
  bodyelement: any;
  sidenavelement: any;

  isActive = false;
  isActivefadeInDown = true;
  fixedTolbar = true;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(@Inject(DOCUMENT) document, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public detectScroll(event) {

    if (event.header) {
      this.isActive = false;
      this.isActivefadeInDown = true;
      this.fixedTolbar = true;
    }

    if (event.bottom) {
      this.isActive = true;
      this.isActivefadeInDown = false;
      this.fixedTolbar = false;
    }

  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(ContactDialogComponent, {
  //     width: '250px'
  //   });
  // }

  setToggleOn() {

    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.add('scrollOff');
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.style.display = 'none';

  }

  setToggleOff() {

    this.bodyelement = document.getElementById('nglpage');
    this.bodyelement.classList.remove('scrollOff');
    this.contactFabButton = document.getElementById('contact-fab-button');
    this.contactFabButton.removeAttribute('style');

  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
