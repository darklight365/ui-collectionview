import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CollectionViewModule } from '@nativescript-community/ui-collectionview/angular';
import { SwipeMenuModule } from '@nativescript-community/ui-collectionview-swipemenu/angular';
import install from '@nativescript-community/ui-collectionview-waterfall';

import { CardComponent } from './wallet/card.component';
import { HorizontalGridComponent } from './horizontal-grid/horizontal-grid.component';
import { ReorderComponent } from './reorder/reorder.component';
import { ResizeCellComponent } from './resize-cell/resize-cell.component';
import { ScrollToIndexComponent } from './scroll-to-index/scroll-to-index.component';
import { SimpleGridComponent } from './simple-grid/simple-grid.component';
import { SimpleTemplatesComponent } from './simple-templates/simple-templates.component';
import { SimpleWaterfallComponent } from './simple-waterfall/simple-waterfall.component';
import { SwipeMenuComponent } from './swipe-menu/swipe-menu.component';
import { WalletComponent } from './wallet/wallet.component';

export const COMPONENTS = [
    CardComponent,
    HorizontalGridComponent,
    ReorderComponent,
    ResizeCellComponent,
    ScrollToIndexComponent,
    SimpleGridComponent,
    SimpleWaterfallComponent,
    SimpleTemplatesComponent,
    SwipeMenuComponent,
    WalletComponent,
];
@NgModule({
    imports: [CollectionViewModule, SwipeMenuModule],
    exports: [CollectionViewModule, SwipeMenuModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallModule {}

export function installPlugin() {
    registerElement('Card', () => CardComponent);
    install();
}

export const demos = [
    { name: 'Wallet', path: 'wallet', component: WalletComponent },
    { name: 'Simple Grid', path: 'simple-grid', component: SimpleGridComponent },
    { name: 'Horizontal Grid', path: 'horizontal-grid', component: HorizontalGridComponent },
    { name: 'Simple Waterfall', path: 'simple-waterfall', component: SimpleWaterfallComponent },
    { name: 'Simple Template', path: 'simple-template', component: SimpleTemplatesComponent },
    { name: 'Scroll to Index', path: 'scroll-to-index', component: ScrollToIndexComponent },
    { name: 'Reorder', path: 'reorder', component: ReorderComponent },
    { name: 'Swipe Menu', path: 'swipe-menu', component: SwipeMenuComponent },
    { name: 'ResizeCell', path: 'resize-cell', component: ResizeCellComponent }
];
