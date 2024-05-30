import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.page.html',
  styleUrls: ['./assistant.page.scss'],
})
export class AssistantPage implements OnInit {

  userInput: string = '';
  messages = [
    { text: "Hello !", user: true },
    { text: "Hello! How can I assist you today?", user: false },
    { text: "I'm a student and I want to travel to france for studying with a scolarship, I'd like to know more about the procedures of preparation of Visa and the the type of Visa.", user: true },
    { text: "If you have a soclarship then you must bring a certification, 2 photos, a valid passeport, your school registration, accommodation certificate", user: false }
  ];

  constructor() {}

  sendMessage() {
    if (this.userInput.trim() !== '') {
      this.messages.push({ text: this.userInput, user: true });
      this.userInput = ''; // clear input after sending
      this.fakeBotResponse();
    }
  }

  private fakeBotResponse() {
    let response = "This is a static response. Customize based on input.";
    this.messages.push({ text: response, user: false });
  }

  ngOnInit() {
  }

}
