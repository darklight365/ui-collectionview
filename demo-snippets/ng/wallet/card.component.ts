import { Component, Input, OnInit } from '@angular/core';
import { Card } from './types';

@Component({
    selector: 'payment-card',
    templateUrl: './card.component.html',
    styleUrls: ['../styles.scss']
})
export class CardComponent implements OnInit {
    @Input() data: Card;
    @Input() height: number;
    @Input() foo: string;
    ngOnInit() {
        console.log('Card: ngOnInit');
        console.log(`Card height: ${this.height}`);
        console.log(`Card foo: ${this.foo}`);
        console.log(this);
    }
}
