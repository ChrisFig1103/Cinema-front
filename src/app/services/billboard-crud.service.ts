import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Billboard } from '../components/models/billboards';
@Injectable({
  providedIn: 'root'
})
export class BillboardCrudService {
  URL_API = 'http://localhost:3000/api/billboard';

  selectedBillboard : Billboard ={
    id:0,
    logo_url:'',
    year:'',
    classification:'',
    duration:'',
    genre:'',
    description:'',
    trailer_url:'',
    director:''
  };
 
  billboards : Billboard[];

  constructor(private http: HttpClient) { }

  getBillboards(){
    return this.http.get<Billboard[]>(this.URL_API)
  }

  createBillboard(billboard:Billboard){
    return this.http.post(this.URL_API,billboard);
  }

  putBillboard(billboard:Billboard){
    return this.http.put(`${this.URL_API}/${billboard._id}`,billboard);
  }

  deleteBillboard(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
