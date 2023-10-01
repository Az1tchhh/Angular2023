import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {Post, posts} from "../models/Post";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  posts!:Post[];
  activity = AppComponent.startedActivity;
  changeStatus(){
    this.activity = true;
  }

  ngOnInit(): void {
    this.posts = posts;
  }
}
