import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search-service/search.service.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch(value:string) {
    if (value && value.length > 3) {
      this.searchService.search(value);
    }

    else {
      this.searchService.search('');
    }
  }
}
