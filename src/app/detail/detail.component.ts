import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers:[]
})
export class DetailComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi:InstApi,
    private sanitizer:DomSanitizer
  ) { 
    super(router,activeRoute,instApi);
  }

  url=null;
  imgurl='';
  onMyShow(){
    setTimeout(() => {
      this.url=this.params.url;
      // console.log(this.url,'图片');
    })
  }


}
