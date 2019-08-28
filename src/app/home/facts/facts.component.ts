import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { TweenMax, TimelineMax } from 'gsap';

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
  mediaType: string = 'image';
  @ViewChild('textBox') textBox: ElementRef;
  @ViewChild('imageEl') imageEl: ElementRef;
  @ViewChild('titleEl') titleEl: ElementRef;
  @ViewChild('hideContent') hideContent: ElementRef;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getImageData().subscribe(data => {
      console.log(data);
      this.image = data.hdurl;
      this.title = data.title;
      this.altText = 'NASA image';
      this.explanation = data.explanation;
      this.mediaType = data.media_type;

      data.copyright ? this.copyright = `Copyright &copy; ${data.copyright}` : this.copyright = '';
    });
  }

  onStartAnimations() {
    this.btnClicked = true;
    const textBox = this.textBox.nativeElement;
    const title = this.titleEl.nativeElement;
    const image = this.imageEl.nativeElement;
    const hideContent = this.hideContent.nativeElement;

    const tl = new TimelineMax({paused: true});

    tl
    .to(title, 1, {opacity: 1})
    .to(image, 1, {opacity: 1})
    .to(textBox, .5, {opacity: 1})
    .from(hideContent, .5, {y: '100%'})
    
    tl.play();
  }

  ngAfterViewInit() {
    console.log(this.textBox.nativeElement.innerHTML)

  }

}
