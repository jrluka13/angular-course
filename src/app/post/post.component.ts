import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, Directive, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit
  // OnChanges,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy
{

  @ContentChild('info',{static:true}) infoRef!: ElementRef
  @Output() onRemove = new EventEmitter<number>()
  @Input()
  post!: Post;

  removePost(){
    this.onRemove.emit(this.post.id)
  }


  // ngOnChanges(changes:SimpleChanges):void{
  //   console.log('ngOnChanges: ', changes);
  //
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log();

    // console.log(this.infoRef.nativeElement);

  }
  //
  // ngDoCheck():void{
  //   console.log('ngDoCheck');
  //
  // }
  // ngAfterContentInit():void{
  //   console.log('ngAfterContentInit');
  //
  // }
  // ngAfterContentChecked():void{
  //   console.log('ngAfterContentChecked');
  //
  // }
  //
  // ngAfterViewInit():void{
  //   console.log('ngAfterViewInit');
  //
  // }
  // ngAfterViewChecked():void{
  //   console.log('ngAfterViewChecked');
  //
  // }
  // ngOnDestroy():void{
  //   console.log('ngOnDestroy');
  //
  // }

}
