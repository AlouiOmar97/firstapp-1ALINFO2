import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title: string = "1ALINFO2"
nbr: number = 25
etatBtn: boolean = false
text1: string = ""
t1=[2,5,6, "Bonjour"]

ngOnInit(){
  console.log("Hello");
}

hello(){
  return "Hello Everyone"
}

fillText(){
  this.text1= "Good morning"
}
}
