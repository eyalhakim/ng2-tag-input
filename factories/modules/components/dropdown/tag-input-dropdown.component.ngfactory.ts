/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../node_modules/ng2-material-dropdown/dist/src/modules/components/menu-item/ng2-menu-item.ngfactory';
import * as import3 from 'ng2-material-dropdown/dist/src/modules/components/menu-item/ng2-menu-item';
import * as import4 from 'ng2-material-dropdown/dist/src/modules/services/dropdown-state.service';
import * as import5 from '../../../../modules/core/pipes/highlight.pipe';
import * as import6 from '../../../node_modules/ng2-material-dropdown/dist/src/modules/components/dropdown/ng2-dropdown.ngfactory';
import * as import7 from 'ng2-material-dropdown/dist/src/modules/components/dropdown/ng2-dropdown';
import * as import8 from '../../../node_modules/ng2-material-dropdown/dist/src/modules/components/menu/ng2-dropdown-menu.ngfactory';
import * as import9 from 'ng2-material-dropdown/dist/src/modules/components/menu/ng2-dropdown-menu';
import * as import10 from '../../../../modules/components/dropdown/tag-input-dropdown.component';
import * as import11 from '../../../../modules/components/tag-input/tag-input';
const styles_TagInputDropdown:any[] = ([] as any[]);
export const RenderType_TagInputDropdown:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_TagInputDropdown,
  data: {}
}
);
function View_TagInputDropdown_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import0.ɵppd(2),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = import0.ɵunv(v,0,0,ck(v,1,0,import0.ɵnov(v.parent.parent,0),v.parent.context.$implicit[co.displayBy],co.tagInput.inputForm.value.value));
    ck(v,0,0,currVal_0);
  });
}
function View_TagInputDropdown_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[(l()(),import0.ɵted((null as any),['\n            ']))],(null as any),(null as any));
}
function View_TagInputDropdown_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵand(8388608,(null as any),(null as any),2,(null as any),View_TagInputDropdown_4)),
    import0.ɵdid(270336,(null as any),0,import1.NgTemplateOutlet,[import0.ViewContainerRef],{
      ngTemplateOutlet: [
        0,
        'ngTemplateOutlet'
      ]
      ,
      ngOutletContext: [
        1,
        'ngOutletContext'
      ]

    }
    ,(null as any)),
    import0.ɵpod([
      'item',
      'index',
      'last'
    ]
    ),
    (l()(),import0.ɵand(0,(null as any),(null as any),0))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.templates.first;
    const currVal_1:any = ck(v,2,0,v.parent.context.$implicit,v.parent.context.index,v.parent.context.last);
    ck(v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_TagInputDropdown_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),9,'ng2-menu-item',([] as any[]),(null as any),(null as any),(null as any),import2.View_Ng2MenuItem_0,import2.RenderType_Ng2MenuItem)),
      import0.ɵdid(8192,(null as any),0,import1.NgSwitch,([] as any[]),{ngSwitch: [
        0,
        'ngSwitch'
      ]
    },(null as any)),
      import0.ɵdid(24576,[[
        4,
        4
      ]
    ],0,import3.Ng2MenuItem,[
      import4.DropdownStateService,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import0.ɵted(0,['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),0,1,(null as any),View_TagInputDropdown_2)),
    import0.ɵdid(139264,(null as any),0,import1.NgSwitchCase,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import1.NgSwitch
    ]
      ,{ngSwitchCase: [
        0,
        'ngSwitchCase'
      ]
    },(null as any)),
    (l()(),import0.ɵted(0,['\n\n            '])),
    (l()(),import0.ɵand(8388608,(null as any),0,1,(null as any),View_TagInputDropdown_3)),
    import0.ɵdid(8192,(null as any),0,import1.NgSwitchDefault,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import1.NgSwitch
    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted(0,['\n        ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:boolean = !!co.templates.length;
    ck(v,1,0,currVal_0);
    const currVal_1:any = v.context.$implicit;
    ck(v,2,0,currVal_1);
    const currVal_2:any = false;
    ck(v,5,0,currVal_2);
  },(null as any));
}
export function View_TagInputDropdown_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    import0.ɵpid(0,import5.HighlightPipe,([] as any[])),
    import0.ɵqud(201326592,1,{dropdown: 0}),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'ng2-dropdown',([] as any[]),(null as any),[[
        'window',
        'scroll'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('window:scroll' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,4).scrollListener()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import6.View_Ng2Dropdown_0,import6.RenderType_Ng2Dropdown)),
    import0.ɵprd(256,(null as any),import4.DropdownStateService,import4.DropdownStateService,([] as any[])),
      import0.ɵdid(57344,[[
        1,
        4
      ]
    ],2,import7.Ng2Dropdown,[import4.DropdownStateService],(null as any),(null as any)),
    import0.ɵqud(167772160,2,{button: 0}),
    import0.ɵqud(167772160,3,{menu: 0}),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵeld(0,(null as any),1,6,'ng2-dropdown-menu',([] as any[]),(null as any),(null as any),(null as any),import8.View_Ng2DropdownMenu_0,import8.RenderType_Ng2DropdownMenu)),
      import0.ɵdid(253952,[[
        3,
        4
      ]
    ],1,import9.Ng2DropdownMenu,[
      import4.DropdownStateService,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      focusFirstElement: [
        0,
        'focusFirstElement'
      ]
      ,
      offset: [
        1,
        'offset'
      ]
      ,
      appendToBody: [
        2,
        'appendToBody'
      ]

    }
    ,(null as any)),
    import0.ɵqud(301989888,4,{items: 1}),
    (l()(),import0.ɵted(0,['\n        '])),
    (l()(),import0.ɵand(8388608,(null as any),0,1,(null as any),View_TagInputDropdown_1)),
    import0.ɵdid(401408,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted(0,['\n    '])),
    (l()(),import0.ɵted((null as any),['\n'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import10.TagInputDropdown = v.component;
    ck(v,4,0);
    const currVal_0:any = co.focusFirstElement;
    const currVal_1:any = co.offset;
    const currVal_2:any = co.appendToBody;
    ck(v,9,0,currVal_0,currVal_1,currVal_2);
    const currVal_3:any = co.items;
    ck(v,13,0,currVal_3);
  },(null as any));
}
function View_TagInputDropdown_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'tag-input-dropdown',([] as any[]),(null as any),[[
        'window',
        'scroll'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('window:scroll' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,1).scrollListener()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },View_TagInputDropdown_0,RenderType_TagInputDropdown)),
    import0.ɵdid(57344,(null as any),1,import10.TagInputDropdown,[import11.TagInputComponent],(null as any),(null as any)),
    import0.ɵqud(301989888,1,{templates: 1})
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const TagInputDropdownNgFactory:import0.ComponentFactory<import10.TagInputDropdown> = import0.ɵccf('tag-input-dropdown',import10.TagInputDropdown,View_TagInputDropdown_Host_0,{
  offset: 'offset',
  focusFirstElement: 'focusFirstElement',
  showDropdownIfEmpty: 'showDropdownIfEmpty',
  autocompleteObservable: 'autocompleteObservable',
  minimumTextLength: 'minimumTextLength',
  limitItemsTo: 'limitItemsTo',
  displayBy: 'displayBy',
  identifyBy: 'identifyBy',
  matchingFn: 'matchingFn',
  appendToBody: 'appendToBody',
  autocompleteItems: 'autocompleteItems'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2V5YWxoYWtpbS9kZXYvcmVwb3MvbmcyLXRhZy1pbnB1dC9tb2R1bGVzL2NvbXBvbmVudHMvZHJvcGRvd24vdGFnLWlucHV0LWRyb3Bkb3duLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9leWFsaGFraW0vZGV2L3JlcG9zL25nMi10YWctaW5wdXQvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9leWFsaGFraW0vZGV2L3JlcG9zL25nMi10YWctaW5wdXQvbW9kdWxlcy9jb21wb25lbnRzL2Ryb3Bkb3duL3RhZy1pbnB1dC1kcm9wZG93bi50ZW1wbGF0ZS5odG1sIiwibmc6Ly8vVXNlcnMvZXlhbGhha2ltL2Rldi9yZXBvcy9uZzItdGFnLWlucHV0L21vZHVsZXMvY29tcG9uZW50cy9kcm9wZG93bi90YWctaW5wdXQtZHJvcGRvd24uY29tcG9uZW50LnRzLlRhZ0lucHV0RHJvcGRvd25fSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8bmcyLWRyb3Bkb3duPlxuICAgIDxuZzItZHJvcGRvd24tbWVudSBbZm9jdXNGaXJzdEVsZW1lbnRdPVwiZm9jdXNGaXJzdEVsZW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXBwZW5kVG9Cb2R5XT1cImFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtvZmZzZXRdPVwib2Zmc2V0XCI+XG4gICAgICAgIDxuZzItbWVudS1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleDsgbGV0IGxhc3QgPSBsYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwiISF0ZW1wbGF0ZXMubGVuZ3RoXCI+XG5cbiAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cIml0ZW1bZGlzcGxheUJ5XSB8IGhpZ2hsaWdodCA6IHRhZ0lucHV0LmlucHV0Rm9ybS52YWx1ZS52YWx1ZVwiPlxuICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlcy5maXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7IGl0ZW06IGl0ZW0sIGluZGV4OiBpbmRleCwgbGFzdDogbGFzdCB9XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nMi1tZW51LWl0ZW0+XG4gICAgPC9uZzItZHJvcGRvd24tbWVudT5cbjwvbmcyLWRyb3Bkb3duPlxuIiwiPHRhZy1pbnB1dC1kcm9wZG93bj48L3RhZy1pbnB1dC1kcm9wZG93bj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ1FZO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFDTTtJQUEyRTs7OztJQUEzRTtJQUROLFNBQ00sU0FETjs7Ozt5QkFNdUU7Ozs7SUFGdkU7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO2dCQUVVO01BQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTs7Ozs7SUFEQTtJQUNBO0lBRlYsU0FDVSxVQUNBLFNBRlY7Ozs7O0lBUko7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRStDO0lBRTNDO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU87SUFFUDtnQkFBQTs7OztJQUFBO0tBQUE7SUFHYzs7OztJQVRIO0lBRmYsU0FFZSxTQUZmO0lBQ2U7SUFEZixTQUNlLFNBRGY7SUFJVTtJQUFOLFNBQU0sU0FBTjs7Ozs7OztNQVJaO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQWM7SUFDVjtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7SUFFcUM7SUFDakM7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFZZ0I7SUFDQTtJQUNUOzs7O0lBbEJmO0lBQ3VCO0lBRUE7SUFEQTtJQURuQixTQUFtQixVQUVBLFVBREEsU0FEbkI7SUFHbUI7SUFBZixVQUFlLFNBQWY7Ozs7O01DSlI7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBOzs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
