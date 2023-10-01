import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Post, posts} from "../models/Post";

@Component({
  selector: 'app-posting-panel',
  templateUrl: './posting-panel.component.html',
  styleUrls: ['./posting-panel.component.scss']
})
export class PostingPanelComponent{

  storyText = '';
  date = '';
  statusFine:boolean = true;
  object:Post = {
    date:"",
    storyText:""
  };

  post(){
    if(this.storyText == '' || this.date == ''){
      this.statusFine = false;
      return;
    }
    else{
      console.log(this.date, this.storyText)

      this.object.storyText = this.storyText;
      this.object.date = this.date
      posts.push(this.object);
      return;
    }
  }
}
