import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit, AfterViewInit {
  title: string;
  btnClicked = false;
  image: string;
  video: string;
  altText = ' ';
  explanation: string;
  copyright: string;
  mediaType: string;
  @ViewChild('textBox') textBox: ElementRef;
  @ViewChild('imageEl') imageEl: ElementRef;
  @ViewChild('titleEl') titleEl: ElementRef;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getImageData().subscribe(data => {
      console.log(data);
      this.image = data.hdurl;
      this.title = data.title;
      this.altText = 'NASA image';
      this.explanation = data.explanation;
      // this.mediaType = data.media_type;

      data.copyright ? this.copyright = `Copyright &copy; ${data.copyright}` : this.copyright = '';
    });
  }

  onStartAnimations() {
    this.btnClicked = true;
    const textBox = this.textBox.nativeElement;
    const title = this.titleEl.nativeElement;
    const image = this.imageEl.nativeElement;
    TweenMax.to(textBox, 10, {opacity: 1});
    TweenMax.to(image, 15, {opacity: 1});
    TweenMax.to(title, 10, {opacity: 1});
    
  }

  // onStartAnimations() {
  //   this.btnClicked = true;
  //   const textBox = this.textBox.nativeElement;
  //   const title = this.titleEl.nativeElement;
  //   if(this.imageEl.nativeElement){
  //     const image = this.imageEl.nativeElement;
  //     TweenMax.to(textBox, 10, {opacity: 1});
  //     TweenMax.to(image, 15, {opacity: 1});
  //     TweenMax.to(title, 10, {opacity: 1});
  //   }else{
  //     const video = this.videoeEl.nativeElement;
  //     TweenMax.to(textBox, 10, {opacity: 1});
  //     TweenMax.to(image, 15, {opacity: 1});
  //     TweenMax.to(title, 10, {opacity: 1});
  //   }
    
  // }

  ngAfterViewInit() {
    console.log(this.textBox.nativeElement.innerHTML)

  }

}
