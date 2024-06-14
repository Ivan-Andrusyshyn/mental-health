export interface TestsResult {
  testId: number;
  explanation: ExplanationItem[];
}

export interface ExplanationItem {
  range: {
    min: number;
    max: number;
  };
  text: string;
}
