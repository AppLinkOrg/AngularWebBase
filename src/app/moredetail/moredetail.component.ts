import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';

@Component({
  selector: 'app-moredetail',
  templateUrl: './moredetail.component.html',
  styleUrls: ['./moredetail.component.scss'],
  providers:[]
})
export class MoredetailComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi:InstApi,
  ) { 
    super(router,activeRoute,instApi);
  }
  current=0;
  imgs=[];
  onMyShow(){
    this.imgs = JSON.parse(this.params.url);
    console.log(this.imgs)
  } 


}
