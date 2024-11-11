import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verso-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verso-card.component.html',
  styleUrl: './verso-card.component.css',
})
export class VersoCardComponent {
  ratings = [1, 2, 3, 4, 5];
  selectedRating: number | null = null;
  rateClass =
    'hover:bg-white text-black hover:text-black cursor-pointer rounded-full bg-gray-600 flex items-center justify-center w-10 h-10 text-center text-white';
  isVisible: boolean = true;
  selectRating(index: number): any {
    this.selectedRating = index;
  }
}
