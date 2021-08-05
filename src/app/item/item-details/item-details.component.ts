import { ItemService } from './../service/item.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, shareReplay, tap, filter } from 'rxjs/operators';
import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  private subject = new BehaviorSubject<Item>({ id: 0, name: "" });
  item$: Observable<Item> = this.subject.asObservable();

  constructor(
    private route: ActivatedRoute, 
    private itemService: ItemService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const id = this.route.snapshot.queryParamMap.get("id");
    this.itemService.getItem(id).subscribe(i => this.subject.next(i));

  }


}


