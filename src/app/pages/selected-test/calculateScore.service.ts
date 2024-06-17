// calculate-score.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateScoreService {
  calculateScore(questions: any[]): number | null {
    let score = 0;

    score = questions.reduce((total, control) => {
      const selectedValue = control.get('selectedOption')?.value;
      return total + (selectedValue ? parseInt(selectedValue, 10) : 0);
    }, 0);

    return score;
  }
}
