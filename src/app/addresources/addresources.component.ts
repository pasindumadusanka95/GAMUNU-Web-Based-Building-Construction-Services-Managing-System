import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource.model';

@Component({
  selector: 'app-addresources',
  templateUrl: './addresources.component.html',
  styleUrls: ['./addresources.component.css']
})
export class AddresourcesComponent implements OnInit {

  constructor(public resourceService: ResourceService) { }
  ngOnInit() {
    this.resetForm();
    this.refreshResourceList();
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.resourceService.selectedResource = {
      _id: '',
      resource_id: null,
      resource_type: '',
      resource_name: '',
      resource_owner: '',
      resource_count:null,
      available:null,

      };
    }
  }
  refreshResourceList(){
    this.resourceService.getResourceList().subscribe((res)=>{
      this.resourceService.resource= res as Resource[];
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
}
