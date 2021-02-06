export interface Bill {
  billId?: number;
  userId?: number;
  vendorId?: number;
  billNumber?: string;
  amountPay?: number;
  pendingAmt?: number;
  paidAmount?: number;
}
