import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from '../../services/people-data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrl: './people-table.component.css'
})
export class PeopleTableComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  filters = {
    name: '',
    email: '',
    gender: ''
  };
  sortOrder: string = 'asc'; // Track sort order
  showNameFilter: boolean = false;
  showEmailFilter: boolean = false;
  showGenderFilter: boolean = false;

  constructor(private dataService: PeopleDataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
    this.cdr.markForCheck();
  }

  loadData() {
    this.dataService.getPeople().subscribe((res: any) => {
      this.data = res;
      this.applyFilters();
    });
  }

  toggleNameFilter() {
    this.showNameFilter = !this.showNameFilter;
  }

  toggleEmailFilter() {
    this.showEmailFilter = !this.showEmailFilter;
  }

  toggleGenderFilter() {
    this.showGenderFilter = !this.showGenderFilter;
  }
  
  applyFilters() {
    this.filteredData = this.data.filter((person) => {
      return person.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
             person.email.toLowerCase().includes(this.filters.email.toLowerCase()) &&
             person.gender.toLowerCase().includes(this.filters.gender.toLowerCase());
    });
  }

  sortBy(key: string) {
    this.filteredData.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });

    // Toggle sort order
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}