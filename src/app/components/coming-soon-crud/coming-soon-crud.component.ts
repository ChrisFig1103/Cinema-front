import { Component, OnInit } from '@angular/core';
import {ComingSoonCrudService} from '../../services/coming-soon-crud.service';
import { NgForm } from '@angular/forms';
import { Billboard } from 'src/app/components/models/billboards';
import { PageEvent } from '@angular/material/paginator';
import { ComingSoon } from '../models/comingsoon';

@Component({
  selector: 'app-coming-soon-crud',
  templateUrl: './coming-soon-crud.component.html',
  styleUrls: ['./coming-soon-crud.component.css']
})
export class ComingSoonCrudComponent implements OnInit {

  constructor(public ComingSoonService : ComingSoonCrudService) { }

  ngOnInit(): void {
    this.getComingSoons();
  }
  resetForm(form: NgForm){
    form.reset();
  }

  getComingSoons(){
    this.ComingSoonService.getComingSoons().subscribe(
      res => {this.ComingSoonService.comingsoons = res;},
      err => console.log(err)
    )
  }

  addComingSoon(form: NgForm){
    if(form.value._id){
      this.ComingSoonService.putComingSoon(form.value).subscribe(
         res => {
                      this.getComingSoons();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.ComingSoonService.createComingSoon(form.value).subscribe(
        res => {
          this.getComingSoons();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteComingSoon(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.ComingSoonService.deleteComingSoon(_id).subscribe(
        (res) => {
          this.getComingSoons();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editComingSoon(comingsoon:ComingSoon){
    this.ComingSoonService.selectedComingSoon = comingsoon;
  }

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
   
  page_size: number = 5
  page_number : number =1

  pageSizeOptions = [5,10,20,50,100]
}
