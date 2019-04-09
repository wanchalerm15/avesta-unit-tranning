import { ICRUD } from 'src/app/abstracts/ICRUD.interface';

export namespace ICreate {
    export interface IForm {
        firstname: any;
        lastname: any;
        old: any;
    }

    export class Model implements ICRUD.IMember {
        Id?: number;
        Firstname: string;
        Lastname: string;
        Old: number;
        Created?: string;
        Updated?: string;

        static createModel(form: IForm) {
            const model = new Model();
            model.Firstname = form.firstname;
            model.Lastname = form.lastname;
            model.Old = parseInt(form.old);
            return model;
        }
    }
}