import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersoCardComponent } from './components/verso-card/verso-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, VersoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ratings = [1, 2, 3, 4, 5];

  selectedRating: number | null = null;
  rateClass =
    'hover:bg-white text-black hover:text-black cursor-pointer rounded-full bg-gray-600 flex items-center justify-center w-10 h-10 text-center text-white';
  isVisible: boolean = true;
  selectRating(index: number): any {
    this.selectedRating = index;
    console.log(index);
  }

  toogleVisibility(): void {
    if (
      this.selectedRating === 0 ||
      this.selectedRating === 1 ||
      this.selectedRating === 2 ||
      this.selectedRating === 3 ||
      this.selectedRating === 4
    ) {
      this.isVisible = !this.isVisible;
    }
  }
}
