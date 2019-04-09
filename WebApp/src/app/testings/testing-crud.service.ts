import { ICRUD } from '../abstracts/ICRUD.interface';
import { Observable, of, timer } from 'rxjs';
const dateNow = new Date().toString();

export class TestingCRUDService implements ICRUD.Service {
    private fakeItems: ICRUD.IMember[] = [
        { Id: 1, Firstname: 'Firstname 1', Lastname: 'Lastname 1', Old: 10, Created: dateNow, Updated: dateNow },
        { Id: 2, Firstname: 'Firstname 2', Lastname: 'Lastname 2', Old: 20, Created: dateNow, Updated: dateNow },
        { Id: 3, Firstname: 'Firstname 3', Lastname: 'Lastname 3', Old: 30, Created: dateNow, Updated: dateNow }
    ];

    Items(): Observable<ICRUD.IMember[]> {
        return of(this.fakeItems);
    }

    ItemById(id: number): Observable<ICRUD.IMember> {
        return new Observable(observ => {
            const item = this.fakeItems.find(m => m.Id == id);
            if (!item) observ.error(new Error("Not found item"));
            else observ.next(item);
            observ.complete();
        });
    }

    Create(value: ICRUD.IMember): Observable<ICRUD.IMember> {
        throw new Error("Method not implemented.");
    }

    Update(id: number, value: ICRUD.IMember): Observable<ICRUD.IMember> {
        const model = this.fakeItems.find(m => m.Id == id);
        model.Firstname = value.Firstname;
        model.Lastname = value.Lastname;
        model.Old = value.Old;
        model.Updated = new Date().toString();
        return of(model);
    }

    Delete(id: number): Observable<void> {
        const model = this.fakeItems.findIndex(m => m.Id == id);
        if (model >= 0) {
            this.fakeItems.splice(model, 1);
            return of();
        }
        throw new Error();
    }
}