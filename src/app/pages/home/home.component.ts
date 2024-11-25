import { Component } from '@angular/core';
import {SearchBarComponent} from '../../components/search-bar/search-bar.component';
import {SliderComponent} from '../../components/slider/slider.component';
import {AboutComponent} from '../../components/about/about.component';

@Component({
  selector: 'app-home',
  imports: [SearchBarComponent, SliderComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
