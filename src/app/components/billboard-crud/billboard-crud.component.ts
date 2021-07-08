import { Component, OnInit } from '@angular/core';
import {BillboardCrudService} from '../../services/billboard-crud.service';
import { NgForm } from '@angular/forms';
import { Billboard } from 'src/app/components/models/billboards';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-billboard-crud',
  templateUrl: './billboard-crud.component.html',
  styleUrls: ['./billboard-crud.component.css']
})
export class BillboardCrudComponent implements OnInit {

  constructor(public BillboardService : BillboardCrudService) { }

  ngOnInit(): void {
    this.getBillboards();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getBillboards(){
    this.BillboardService.getBillboards().subscribe(
      res => {this.BillboardService.billboards = res;},
      err => console.log(err)
    )
  }

  addBillboard(form: NgForm){
    if(form.value._id){
      this.BillboardService.putBillboard(form.value).subscribe(
         res => {
                      this.getBillboards();
                      form.reset();
                    },
        err=> console.log(err)
      )
    }else{
      this.BillboardService.createBillboard(form.value).subscribe(
        res => {
          this.getBillboards();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

  deleteBillboard(_id:string){
    if(confirm('Are you sure you want to delete it?')){
      this.BillboardService.deleteBillboard(_id).subscribe(
        (res) => {
          this.getBillboards();
        } ,
        (err) => console.log(err)
      )
    } 
  }

  editBillboard(billboard:Billboard){
    this.BillboardService.selectedBillboard = billboard;
  }

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex+1
  }
   

  page_size: number = 5
  page_number : number =1

  pageSizeOptions = [5,10,20,50,100]
}
