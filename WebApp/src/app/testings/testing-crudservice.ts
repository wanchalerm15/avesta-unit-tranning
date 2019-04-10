import { Injectable } from "@angular/core";
import { ICRUD } from '../abstracts/ICRUD.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestingCRUDService implements ICRUD.Service {
    private fakeItems: ICRUD.IMember[] = [
        { Id: 1, Firstname: "firstname 1", Lastname: 'lastname 1', Old: 1, Created: new Date().toString(), Updated: new Date().toString() },
        { Id: 2, Firstname: "firstname 2", Lastname: 'lastname 2', Old: 2, Created: new Date().toString(), Updated: new Date().toString() },
        { Id: 3, Firstname: "firstname 3", Lastname: 'lastname 3', Old: 3, Created: new Date().toString(), Updated: new Date().toString() },
    ];

    Items(): Observable<ICRUD.IMember[]> {
        return of(this.fakeItems);
    }

    ItemById(id: number): Observable<ICRUD.IMember> {
        return of(this.fakeItems.find(m => m.Id == id));
    }

    Create(value: ICRUD.IMember): Observable<ICRUD.IMember> {
        value.Id = 4;
        value.Created = new Date().toString();
        value.Updated = new Date().toString();
        this.fakeItems.push(value);
        return of(value);
    }

    Update(id: number, value: ICRUD.IMember): Observable<ICRUD.IMember> {
        throw new Error("Method not implemented.");
    }

    Delete(id: number): Observable<void> {
        const index = this.fakeItems.findIndex(m => m.Id == id);
        this.fakeItems.splice(index, 1);
        return of();
    }

}