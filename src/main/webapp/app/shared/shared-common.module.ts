import { NgModule } from '@angular/core';

import { RecipeAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RecipeAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RecipeAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RecipeAppSharedCommonModule {}
