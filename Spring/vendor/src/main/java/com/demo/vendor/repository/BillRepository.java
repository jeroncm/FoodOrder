package com.demo.vendor.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.vendor.model.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {

	@Query(value = "select * from bill_payment.bill_pay where bill_number = ? ", nativeQuery = true)
	public Bill getUserServicesOnBill(String bill);

	@Query(value = "select * from bill_payment.bill_pay where us_id = ? and pending_amount >= 0", nativeQuery = true)
	public List<Bill> getUserServices(int id);

	@Query(value = "select * from bill_payment.bill_pay where ven_id = ?", nativeQuery = true)
	public List<Bill> getBillVendor(int id);

	@Query(value = "select * from bill_payment.bill_pay where us_id = ? and ven_id = ?", nativeQuery = true)
	public Bill getUserServices2(int id, int serId);

	@Query(value = "select * from bill_payment.bill_pay where bill_number = ?", nativeQuery = true)
	public List<Bill> getdataFromBill(String bill);

	@Query(value = "select * from bill_payment.bill_pay where us_id = ?", nativeQuery = true)
	public List<Bill> getpaidAmountUser(int id);

	@Query(value = "select SUM(rem_amount) from bill_payment.bill_pay where us_id = ?", nativeQuery = true)
	public int getSum(int id);

	@Query(value = "select SUM(amount_pay) from bill_payment.bill_pay where ven_id = ?", nativeQuery = true)
	public int getSumVendor(int id);

	@Query(value = "select SUM(rem_amount) from bill_payment.bill_pay where ven_id = ?", nativeQuery = true)
	public int getRemSumVendor(int id);

	@Query(value = "select SUM(pending_amount) from bill_payment.bill_pay where ven_id = ?", nativeQuery = true)
	public int getPenSumVendor(int id);

	@Modifying
	@Query(value = "insert into bill_payment.user_notification values (1,?,?,?,?) ", nativeQuery = true)
	public void addRemainder(String usrname, String venname2, String venname, Date d1);

	@Query(value = "select user_notification_id from user_notification", nativeQuery = true)
	public List<Integer> getindexvalue();

	@Modifying
	@Query(value = "insert into bill_payment.user_notification values (?,?,?,?,?) ", nativeQuery = true)
	public void insertnotification(int ctpd, String usrname, String venname2, String venname, Date d1);

	@Query(value = "select * from bill_payment.user_notification where user_notification_us_id = ?", nativeQuery = true)
	public List getnotification(String name);

	@Query(value = "select user_notification_date from bill_payment.user_notification where user_notification_us_id = ?", nativeQuery = true)
	public List<java.sql.Date> getDueDateFromVendor(String name);

	@Query(value = "select user_notification_ven_name from bill_payment.user_notification where user_notification_us_id = ?", nativeQuery = true)
	public List<String> getUserNoticationOfVendorName(String name);

	@Query(value = "select user_notification_ven_service from bill_payment.user_notification where user_notification_us_id = ?", nativeQuery = true)
	public List<String> getUserNoticationOfVendorService(String name);

}
