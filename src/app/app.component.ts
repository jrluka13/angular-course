import { Component, OnInit } from '@angular/core';

export interface Post{
  title:string,
  text:string,
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  posts: Post[] = [
    {title:'Хочу выучить Angular компоненты',text:'Я все ещё учу компоненты',id:1},
    {title:'След блок',text:'Будет проаовйцвйцвйцвйцв',id:2},
    // {title:'AWDawdjoijoirfejoewf',text:'AWDjhklewfkwefwefwe',id:3}

  ]

  ngOnInit():void
{
  setTimeout(()=>{
    console.log('Timeout');
    this.posts[0] = {
      title:"canged",
      text:'adawdawdawdawd',
      id:4
    }


  },5000)
}
  updatePosts(post:Post){
    this.posts.unshift(post)
    console.log(post);

  }

  removePost(id:number){
    console.log(id);
    this.posts = this.posts.filter(p=>p.id!== id)

  }
}
