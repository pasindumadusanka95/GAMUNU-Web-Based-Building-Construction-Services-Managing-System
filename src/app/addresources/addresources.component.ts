import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceService } from '../shared/resource.service';
import { Resource } from '../shared/resource.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addresources',
  templateUrl: './addresources.component.html',
  styleUrls: ['./addresources.component.css']
})
export class AddresourcesComponent implements OnInit {
  @ViewChild('resourceForm') resource_form;
  constructor(public resourceService: ResourceService,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm(this.resource_form);
    this.refreshResourceList();
  }
  resetForm(form?: NgForm) {
    if (form) {
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
  refreshResourceList() {
    this.resourceService.getResourceList().subscribe((res) => {
      this.resourceService.resource = res as Resource[];
    });
  }
  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.resourceService.postResource(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshResourceList();
        this.toastr.success('Submiited Successfully', 'Resource Data');
      });
    } else {

      this.resourceService.putResource(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshResourceList();
        this.toastr.info('Updated Successfully', 'Resource Data');
      });
    }
  }
  onEdit(reso: Resource) {
    this.resourceService.selectedResource = reso;

  }
}
