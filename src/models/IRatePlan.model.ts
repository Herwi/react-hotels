export default interface IRatePlan {
  id: string;
  shortDescription: string;
  longDescription?: string;
  prePayment: string;
  cancellationPolicy?: {
    name: string;
    text: string;
    penalty: string;
    applicable: string;
    amount: number;
    hour?: string;
    days?: number;
  };
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
}
