import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { TagInputComponent, TagInputForm, DeleteIconComponent, TagInputDropdown, TagComponent, TagRipple } from './components';
import { HighlightPipe } from './core';
var TagInputModule = (function () {
    function TagInputModule() {
    }
    return TagInputModule;
}());
export { TagInputModule };
TagInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    Ng2DropdownModule
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ]
            },] },
];
TagInputModule.ctorParameters = function () { return []; };
export * from './components';
//# sourceMappingURL=index.js.map