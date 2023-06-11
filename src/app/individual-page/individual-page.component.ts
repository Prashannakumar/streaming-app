import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrls: ['./individual-page.component.scss'],
})
export class IndividualPageComponent implements OnInit {
  params_subscription: Subscription;
  active_param: string;
  constructor(
    public route: Router,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.params_subscription = this.activeRoute.params.subscribe(
      (param: Params) => {
        console.log(param, 'paramms');
        this.active_param = param['req_param'];
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        console.log('Params Subscription Completed');
      }
    );
  }
}
