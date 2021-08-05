import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  private subject = new BehaviorSubject<Item[]>([]);
  items$: Observable<Item[]> = this.subject.asObservable();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.subject.next(items));
  }

}
