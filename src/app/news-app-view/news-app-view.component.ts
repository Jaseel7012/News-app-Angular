import { Component } from '@angular/core';
import { ApiNewsService } from '../api-news.service';

@Component({
  selector: 'app-news-app-view',
  templateUrl: './news-app-view.component.html',
  styleUrls: ['./news-app-view.component.css']
})
export class NewsAppViewComponent {
  constructor(private api:ApiNewsService){
    api.fetchNews().subscribe(
      (resp)=>{
        this.data=resp

      }
    )
  }
 data:any=[]
}
