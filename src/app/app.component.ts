import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: SharedService) { }

  cardList: any = [];

  title = 'dotAngular';

  ModalTitle: string;
  ActivateAddEditCardComp: boolean = false;
  card:any;

  ngOnInit(): void {
    this.refreshCard();
  }

  refreshCard() {
    this.service.getCardList().subscribe(data => {
      this.cardList = data
    });
  }

  openClick() {
    this.card = {
      card_id: 0,
      title:'',
      description:'',
      phase:''
    }
    this.ActivateAddEditCardComp = true;
    this.ModalTitle = 'Add Card';
  }

  editClick(item) {
    this.card = item;
    this.ModalTitle = 'Edit Card';
    this.ActivateAddEditCardComp = true;
  }

  deleteClick(item) {
    if(confirm('Are you sure?')){
      this.service.deleteCard(item.card_id).subscribe(data=>{
        alert(data.toString());
        this.refreshCard();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCardComp = false;
    this.refreshCard();
  } 
}
