import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import '@cds/core/icon/register.js';
import { ClarityIcons, lightbulbIcon,bellIcon,pencilIcon,archiveIcon,trashIcon,cogIcon,barsIcon } from '@cds/core/icon';
import { MediaMatcher } from '@angular/cdk/layout';



// ClarityIcons.addIcons(lightbulbIcon);
// ClarityIcons.addIcons(bellIcon);
// ClarityIcons.addIcons(pencilIcon);
// ClarityIcons.addIcons(archiveIcon);
// ClarityIcons.addIcons(trashIcon);
// ClarityIcons.addIcons(cogIcon);
// ClarityIcons.addIcons(barsIcon);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      ``);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit() {
  }

}