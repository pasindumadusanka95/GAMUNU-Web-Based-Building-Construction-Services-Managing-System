import { Component, OnInit } from '@angular/core';
import { Resource } from '../shared/resource.model';
import { OrderService } from '../shared/order.service';
import { ResourceService } from '../shared/resource.service';
import { Order } from '../shared/order.model';
import { NgForm } from '@angular/forms';
import { JobapplyService } from '../shared/jobapply.service';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],

})
export class ResourcesComponent implements OnInit {

  constructor( public orderService:OrderService,
    public resourceService:ResourceService,
    public jobapplyService:JobapplyService,
    public projectService:ProjectService) { }

  ngOnInit() {
    this.refreshOrderList();
    this.refreshResourceList();
    this.resetForm();
    this.projectService.setProjectCount();
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.resourceService.selectedResource = {
      _id: '',
      resource_id: null,
      resource_type: '',
      resource_name: '',
      resource_owner: '',
      resource_count: null,
      available: null,


      };
    }
  }
  refreshOrderList(){
    this.orderService.getOrderList().subscribe((res)=>{
      this.orderService.orders= res as Order[];
    });
  }

  refreshResourceList(){
    this.resourceService.getResourceList().subscribe((res)=>{
      this.resourceService.resource = res as Resource[];
    });
  }

  onSubmit(form : NgForm){
    if(form.value._id==''){
    this.resourceService.postResource(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshResourceList();
     // M.toast({html: 'Saved Successfully', classes: 'rounded'});
    });
  } else{
  // tslint:disable-next-line: deprecation
    this.resourceService.putResource(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshResourceList();
    });
  }
}
onEdit(reso:Resource){
  this.resourceService.selectedResource= reso;
}
  onDelete(_id:string , form:NgForm ){
    if(confirm('Are you sure to delete this record?')==true){
      this.resourceService.deleteResource(_id).subscribe((res)=>{
        this.refreshResourceList();
        this.resetForm(form);
      },
      (e) => console.log(e.message));
    }
  }
}

