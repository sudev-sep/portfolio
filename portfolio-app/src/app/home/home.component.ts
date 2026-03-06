import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [], // Perfect if you are using Angular Standalone Components!
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
// Added the 'implements' keyword right here:
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // 1. Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the element is in the viewport, add the 'is-visible' class
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once it's revealed so it doesn't animate again
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    // 2. Target all elements with the 'reveal-on-scroll' class
    const hiddenElements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el: any) => observer.observe(el));
  }
}