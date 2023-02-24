import { Component } from '@angular/core';

@Component({
  selector: 'app-iloveyou',
  templateUrl: './iloveyou.component.html',
  styleUrls: ['./iloveyou.component.scss']
})

export class IloveyouComponent {
  test(){
    const msg = document.getElementById("msg")
    const span = document.getElementById("span")

    msg?.classList.toggle("view")
    span?.classList.toggle("view")
  }
}
