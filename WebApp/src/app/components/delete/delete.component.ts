import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/services/crud.service';
import { ICRUD } from 'src/app/abstracts/ICRUD.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ICreate } from '../create/create.interface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  item: ICRUD.IMember = new ICreate.Model();
  id: number;
  loading: boolean;
  errorMessage: string;

  constructor(
    private crudService: CRUDService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.crudService.ItemById(this.id)
      .subscribe(result => this.item = result, () => this.router.navigate(['/read']));
  }

  onDelete() {
    this.errorMessage = '';
    this.loading = true;
    this.crudService.Delete(this.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        result => this.router.navigate(['/read']),
        error => this.errorMessage = error.message
      );
  }
}
