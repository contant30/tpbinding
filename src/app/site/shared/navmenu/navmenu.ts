import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navmenu',
  imports: [RouterLink, CommonModule],
  templateUrl: './navmenu.html',
  styleUrl: './navmenu.css',
})
export class Navmenu {

}
