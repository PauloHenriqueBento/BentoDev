// mouse-animation.component.ts
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mouse-animation',
  template: `
    <div class="cursor" #cursor></div>
  `,
  styleUrls: ['./mouse-animation.component.scss']
})
export class MouseAnimationComponent implements AfterViewInit {
  @ViewChild('cursor', { static: false }) cursorElement!: ElementRef; // Obtém uma referência ao elemento do cursor

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', (e) => {
      const x = e.pageX;
      const y = e.pageY;
      // console.log(`X${x} - Y${y}`)
      this.updateCursorPosition(x, y);
    });

    document.addEventListener('mouseout', (e) => {
      this.cursorElement.nativeElement.style.display = 'none';
    })
  }

  private updateCursorPosition(x: number, y: number): void {
    if (this.cursorElement) {
      this.cursorElement.nativeElement.style.display = 'block';
      this.cursorElement.nativeElement.style.top = y + 'px';
      this.cursorElement.nativeElement.style.left = x + 'px';
    }
  }
}
