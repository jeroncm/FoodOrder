package com.demo.vendor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bill_pay")
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bill_id")
	public int billId;
	@Column(name = "us_id")
	public int userId;
	@Column(name = "ven_id")
	public int vendorId;
	@Column(name = "bill_number")
	public String billNumber;
	@Column(name = "amount_pay")
	public int amountPay;
	@Column(name = "pending_amount")
	public int pendingAmt;
	@Column(name = "rem_amount")
	public int paidAmount;

	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Bill(int billId, int userId, int vendorId, String billNumber, int amountPay, int pendingAmt,
			int paidAmount) {
		super();
		this.billId = billId;
		this.userId = userId;
		this.vendorId = vendorId;
		this.billNumber = billNumber;
		this.amountPay = amountPay;
		this.pendingAmt = pendingAmt;
		this.paidAmount = paidAmount;
	}

	public int getBillId() {
		return billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getVendorId() {
		return vendorId;
	}

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}

	public String getBillNumber() {
		return billNumber;
	}

	public void setBillNumber(String billNumber) {
		this.billNumber = billNumber;
	}

	public int getAmountPay() {
		return amountPay;
	}

	public void setAmountPay(int amountPay) {
		this.amountPay = amountPay;
	}

	public int getPendingAmt() {
		return pendingAmt;
	}

	public void setPendingAmt(int pendingAmt) {
		this.pendingAmt = pendingAmt;
	}

	public int getPaidAmount() {
		return paidAmount;
	}

	public void setPaidAmount(int paidAmount) {
		this.paidAmount = paidAmount;
	}

	@Override
	public String toString() {
		return "Bill [billId=" + billId + ", userId=" + userId + ", vendorId=" + vendorId + ", billNumber=" + billNumber
				+ ", amountPay=" + amountPay + ", pendingAmt=" + pendingAmt + ", paidAmount=" + paidAmount + "]";
	}

}
