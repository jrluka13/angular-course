import { Component,ElementRef,EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.scss']
})
export class PostformComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput',{static:false}) inputRef!: ElementRef

  title:string = ''
  text:string = ''

  constructor() { }

  ngOnInit(): void {
  }
  
  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post : Post = {
        title:this.title,
        text:this.text
      }
      this.onAdd.emit(post)


      this.title = this.text = '';

    }
  }

  focusTitle(ref:any){
    console.log(ref);

    console.log(this.inputRef);
    ref.focus()

  }

}
