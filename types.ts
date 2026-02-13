export enum AppSlide {
  INTRO = 0,
  GIFT = 1,
  LETTER = 2
}

export interface BankTransactionDetails {
  amount: number;
  beneficiary: string;
  message: string;
  date: string;
}
