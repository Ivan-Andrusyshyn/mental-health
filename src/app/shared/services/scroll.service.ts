import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}
  private smoothDelay: any;

  scrollToCurrentQuestion(currentQuestionIndex: number, questionElements: any) {
    if (!questionElements || questionElements.length === 0) {
      return;
    }

    const questionElementsArray = questionElements.toArray();
    const currentQuestionElement =
      questionElementsArray[currentQuestionIndex]?.nativeElement;

    if (currentQuestionElement) {
      const targetPosition =
        currentQuestionElement.getBoundingClientRect().top +
        window.pageYOffset -
        180;
      console.log(targetPosition);

      this.smoothDelay = setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }, 200);
    }
  }

  cancelSmoothScroll(): void {
    if (this.smoothDelay) {
      clearTimeout(this.smoothDelay);
      this.smoothDelay = null;
    }
  }
}
