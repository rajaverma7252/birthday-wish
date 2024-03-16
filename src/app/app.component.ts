import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  public title: string = "birthday-wish";
  public btnTitle: string = "Let's play some music";
  public arrangeBulbs: boolean = false;
  public decorateTheme: boolean = false;
  public flyBallons: boolean = false;
  public seeCake: boolean = false;
  public message: boolean = false;
  public happyBday: boolean = false;

  onClickBtn(event: string) {
    var that = this;
    if (event == "Let's play some music") {
      let audio = new Audio();
      audio.src = "./assets/hbd.mp3";
      audio.loop = true;
      audio.play();
      that.btnTitle = "Let's arrange some bulbs";
    }
    else if (event == "Let's arrange some bulbs") {
      that.arrangeBulbs = true;
      setTimeout(() => {
        that.btnTitle = "Let's decorate theme";
      }, 500);
    }
    else if (event == "Let's decorate theme") {
      that.decorateTheme = true;
      setTimeout(() => {
        that.btnTitle = "Let's fly some ballons";
      }, 500);
    }
    else if (event == "Let's fly some ballons") {
      that.flyBallons = true;
      setTimeout(() => {
        that.btnTitle = "Let's see your cake";
      }, 500);
    }
    else if (event == "Let's see your cake") {
      that.seeCake = true;
      setTimeout(() => {
        that.btnTitle = "Happy birthday @Pynk";
      }, 500);
    }
    else if (event == "Happy birthday @Pynk") {
      that.happyBday = true;
      setTimeout(() => {
        that.btnTitle = "A message for you";
      }, 500);
    }
    else if (event == "A message for you") {
      that.message = true;
    }
  }
}
