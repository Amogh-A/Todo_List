import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from '/home/Amogh/Documents/Training/AJS/assignment/todo-list/src/app/event-emitter.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit() {

    
    
  }
  invokeFirstComponentFunction(name:string)
  {
    this.eventEmitterService.onFirstComponentButtonClick(name);
  }

}
