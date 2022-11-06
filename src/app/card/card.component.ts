import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: SharedService){
    
  }

  @Input() card:any;
  @Output("closeClick") closeClick: EventEmitter<any> = new EventEmitter();
  card_id: string;
  title: string;
  description: string;
  phase: string;
  
  ngOnInit(): void {
    this.title = this.card.title;
    this.card_id = this.card.card_id;
    this.description = this.card.description;
    this.phase = this.card.phase;
  }

  addCard() {
    var val = {
      card_id:this.card_id,
      title: this.title,
      description: this.description,
      phase: this.phase
    };
    this.service.addCard(val).subscribe(res=>{
      alert(res.toString());
      this.closeClick.emit()
    });
  }

  updateCard() {
    var val = {
      card_id: this.card_id,
      title: this.title,
      description: this.description,
      phase: this.phase
    };
    this.service.updateCard(val).subscribe(res => {
      alert(res.toString());
      console.log(res);
      this.closeClick.emit()
    });
  }
  
}
