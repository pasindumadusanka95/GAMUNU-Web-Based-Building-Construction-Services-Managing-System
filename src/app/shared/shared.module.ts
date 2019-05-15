import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,



     ],
    declarations: [
        UserProfileComponent

    ],
    exports: [
        UserProfileComponent

    ]
})
export class SharedModule {}
