import { Component, ElementRef, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private el: ElementRef) {
    afterNextRender(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      const hiddenElements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
      hiddenElements.forEach((el: any) => observer.observe(el));
    });
  }
}