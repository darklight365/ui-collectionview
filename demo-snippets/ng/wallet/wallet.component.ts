import { Component, ElementRef, ViewChild } from '@angular/core';
import { FlexboxLayout, Label, ObservableArray, Screen, View } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { HEIGH_CARD, dataCards } from './carddata';
import { animateView } from './animation';

@Component({
    selector: 'ns-collectionview-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['../styles.scss']
})
export class WalletComponent {
    constructor(private router: RouterExtensions) {}
    @ViewChild('refShowBtn', { static: false }) refShowBtn: Label;
    @ViewChild('refAddBtn', { static: false }) refAddBtn: FlexboxLayout;
    @ViewChild('refTextHeader', { static: false }) refTextHeader: Label;
    FULL_CARD_HEIGHT = HEIGH_CARD;
    isOpen = false;
    items = new ObservableArray(dataCards);
    transaleY = 70;
    viewCards: View[] = [];

    toggleStatus() {
        const { close, open, isOpen, refShowBtn, refAddBtn, refTextHeader, transaleY, viewCards } = this;
        const showBtn: View = refShowBtn.nativeView;
        const addBtn: View = refAddBtn.nativeView;
        const addWalletBtn: View = addBtn.getViewById('icon-add');
        const textHeader: View = refTextHeader.nativeView;

        if (isOpen) {
            viewCards.forEach((cardView, index) => index === 0 || close(cardView, index));
            animateView(addBtn, { translate: { y: 0, x: 0 }, alpha: 1, rotation: 0 });
            animateView(addWalletBtn, { rotation: 0 });
            animateView(showBtn, { rotation: 90, alpha: 0 });
            animateView(textHeader, { translate: { x: 0, y: 0 } });
        } else {
            viewCards.forEach((cardView) => open(cardView));
            animateView(addBtn, { translate: { y: 50, x: 0 }, alpha: 0 });
            animateView(addWalletBtn, { rotation: 180 });
            animateView(showBtn, { rotation: 0, alpha: 1 });
            animateView(textHeader, { translate: { x: -(Screen.mainScreen.widthDIPs / 2) + textHeader.getActualSize().width / 2 + 10, y: 0 } });
        }
        this.isOpen = !this.isOpen;
    }

    open(cardView: View) {
        animateView(cardView, { translate: { x: 0, y: 0 } });
    }

    close(cardView: View, index: number) {
        animateView(cardView, { translate: { x: 0, y: -(HEIGH_CARD - this.transaleY) * index } });
    }

    currentToggledIndex = -1;
    toggleItemHeight(item) {
        const { items, currentToggledIndex } = this;
        const index = items.findIndex((i) => i.id === item.id);
        if (index >= 0) {
            if (!item.expanded && currentToggledIndex !== -1) {
                const currentItem = items.getItem(currentToggledIndex);
                currentItem.expanded = false;
                items.setItem(currentToggledIndex, currentItem);
            }
            item.expanded = !!!item.expanded;
            this.currentToggledIndex = item.expanded ? index : -1;
            items.setItem(index, item);
        }
    }

    onItemTap({ index, item }) {
        this.toggleItemHeight(item);
    }

    goBack(): void {
        this.router.back();
    }
}
