import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  title: string;
  btnClicked = false;
  image: string;
  altText = ' ';
  explanation: string;
  copyright: string;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
  }

  onGetImage() {
    this.getData.getImageData().subscribe(data => {
      console.log(data);
      this.btnClicked = true;
      this.title = data.title;
      this.image = data.hdurl;
      this.altText = 'NASA image';
      this.explanation = data.explanation;
      this.copyright = `Copyright &copy; ${data.copyright}`;

      // WILL NEED TO DISPLAY BUTTON AS BLOCK ELEMENT
    });
  }

}
