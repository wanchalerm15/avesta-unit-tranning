import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/services/crud.service';
import { ICRUD } from 'src/app/abstracts/ICRUD.interface';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  items: ICRUD.IMember[] = [];

  constructor(private crudService: CRUDService) { }

  ngOnInit() {
    this.crudService.Items().subscribe(result => this.items = result);
  }

}
