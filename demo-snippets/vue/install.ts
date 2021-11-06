import Vue from 'nativescript-vue';

import CollectionView from '@nativescript-community/ui-collectionview/vue';
import install from '@nativescript-community/ui-collectionview-waterfall';

import SimpleGrid from './SimpleGrid.vue';
import SimpleWaterfall from './SimpleWaterfall.vue';

export function installPlugin() {
    Vue.use(CollectionView);
    install();
}

export const demos = [
    { name: 'Simple Grid', path: 'simple-grid', component: SimpleGrid },
    { name: 'Simple Waterfall', path: 'simple-waterfall', component: SimpleWaterfall },
];
