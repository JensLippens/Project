import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
    ],
})
export class MaterialModule {}