import { Component } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  radius = 10;

  ngAfterContentInit() {
    d3.select("p").style("color", "red");
  }

  colorMe() {
    d3.select("button").style("color", "red");
  }

  clicked(event: any) {
    d3.select(event.target).
      append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', () => { return this.radius; })
      .attr('fill', 'red')

  }
}
