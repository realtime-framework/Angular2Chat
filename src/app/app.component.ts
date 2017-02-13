import { Component } from '@angular/core';
import * as Realtime from 'realtime-messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private messages: string[];
  private messageText: string;
  private realtime: Realtime.Client;
  private chatChannel: string = "angular2-simplechat";

  constructor() {
    // array with the messages received
    this.messages = [];

    // Realtime client and config properties
    this.realtime = Realtime.createClient();
    this.realtime.setClusterUrl("http://ortc-developers.realtime.co/server/2.1/");

    // connect to the Realtime server
     // Note: we are using our demo appkey, you should replace it with your own Realtime appkey
    this.realtime.connect("2Ze1dz", "SomeToken");

    // OnConnected event listener
    this.realtime.onConnected = (client) => {
      console.log("Connected to Realtime server");

      // Subscribe to the Realtime channel
      this.realtime.subscribe(this.chatChannel, true, (client, channel, message) => {
        console.log("Received message on channel", channel, ":", message);

        // add message to messages array
        this.messages.push(message);
      })
    }

    this.realtime.onException = (client, exception) => {
      console.log("Realtime error:", exception);
    }    
  }

  // Sends the message entered in the form to the Realtime channel
  sendMessage() {
    if(this.realtime.getIsConnected()) {
      // Get the message from the UI form
      const message = this.messageText;

      // send the message to the Realtime channel
      this.realtime.send(this.chatChannel, message);

      // clear input
      this.messageText = "";
    }
  }
}
