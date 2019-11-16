import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject, Observable } from 'rxjs';
import { liveSearch } from '../post-search';
import { Post } from '../model/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  postlist: Post[];
  userIdSubject = new Subject<string>();
   posts$ = this.userIdSubject.pipe(
    liveSearch(userId => this.searchService.fetchPosts(userId))
  );
  postOption: Observable<Post[]>;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // this.queryField.valueChanges.subscribe(result => console.log(result));
    this.getItems();
  }

  searchPosts(userId: string) {
    this.userIdSubject.next(userId);
  }

  getItems() {
    this.searchService.getItems();
  }

}
