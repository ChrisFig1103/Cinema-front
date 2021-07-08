import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ComingSoon } from '../components/models/comingsoon';
@Injectable({
  providedIn: 'root'
})
export class ComingSoonCrudService {
  URL_API = 'http://localhost:3000/api/comingSoon';

  selectedComingSoon : ComingSoon ={
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

  comingsoons : ComingSoon[];
  
  constructor(private http: HttpClient) { }

  getComingSoons(){
    return this.http.get<ComingSoon[]>(this.URL_API)
  }

  createComingSoon(comingsoon:ComingSoon){
    return this.http.post(this.URL_API,comingsoon);
  }

  putComingSoon(comingsoon:ComingSoon){
    return this.http.put(`${this.URL_API}/${comingsoon._id}`,comingsoon);
  }

  deleteComingSoon(_id:string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
