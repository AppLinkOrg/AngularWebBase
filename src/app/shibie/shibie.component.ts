import { Component, OnInit, } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { InstApi } from 'src/providers/inst.api';
import { ApiConfig } from '../api.config';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-shibie',
  templateUrl: './shibie.component.html',
  styleUrls: ['./shibie.component.scss'],
  providers:[]
})
export class ShibieComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi:InstApi,
    private sanitizer:DomSanitizer,
  ) { 
    super(router,activeRoute,instApi);
  }
  onMyShow(){
  
  }

  public uploader: FileUploader = new FileUploader({
    url: ApiConfig.getUploadPath+'test/',
    method: "POST",
    itemAlias: "uploadedfile",
  });


  url='';
  imgURL: any;
  onechange(file){
    console.log(file,'one');
    
    
    let imgurl = window.URL.createObjectURL(file[0]);
    // this.url=imgurl;
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    var that = this;
    reader.onload = () => {
      that.imgURL = reader.result;
      console.log(that.imgURL,'oo');
      that.navigate('/detail',{url: that.imgURL})
    };
   
    // this.navigate('/detail',{url:imgurl})
  }

  morechange(files){

    console.log(files,'more', );
    var imgs = [];
    var num=0;
    for(var i=0;i<files.length;i++){
      console.log(files[i],i);
      num++;
      imgs.push(window.URL.createObjectURL(files[i]))
    }
    console.log(imgs);
    var urls =JSON.stringify(imgs);
    if(num==imgs.length){
      this.navigate('/moredetail',{url:urls}  )
    }
    
  }

}
