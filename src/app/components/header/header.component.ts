import {Component, ElementRef, HostListener} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isScrolled = false;

  constructor(private element: ElementRef) {
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     this.element.nativeElement.querySelector('.navbar').style.height = '80px';
  //     this.element.nativeElement.querySelector('.logo').style.width = '6rem';
  //   } else {
  //     this.element.nativeElement.querySelector('.navbar').style.height = '105px';
  //     this.element.nativeElement.querySelector('.logo').style.width = '7rem';
  //
  //   }
  // }
}
