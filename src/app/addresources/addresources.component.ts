import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceService } from '../shared/resource.service';

@Component({
  selector: 'app-addresources',
  templateUrl: './addresources.component.html',
  styleUrls: ['./addresources.component.css']
})
export class AddresourcesComponent implements OnInit {

  constructor(public resourceService: ResourceService) { }
  ngOnInit() {
    this.resetForm();
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
      available:null

      };
    }
  }

  onSubmit(form : NgForm){
    this.resourceService.postResource(form.value).subscribe((res)=>{
      this.resetForm(form);
     // M.toast({html: 'Saved Successfully', classes: 'rounded'});
    });
  }
}
