import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface User {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-search-user-by-name',
  templateUrl: './search-user-by-name.component.html',
  styleUrls: ['./search-user-by-name.component.scss']
})
export class SearchUserByNameComponent implements OnInit, AfterViewInit {
  listUsers: User[];
  displayedColumns: string[] = ['name', 'phone'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this._getListUsers();
  }

  private _getListUsers(): void {
    this.http.get('assets/sample.json').subscribe((data: any)=> {
      this.listUsers = data.sort((a: User, b: User) => a.name.localeCompare(b.name));
      this.dataSource.data = this.listUsers;
    });
  }

  searchByName(name: string): void {
    this.dataSource.data = this.listUsers.filter(data => data.name.toLowerCase().startsWith(name.toLowerCase()));
  }

}
