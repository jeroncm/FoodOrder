package com.demo.vendor.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.vendor.model.Bill;
import com.demo.vendor.model.UserDb;
import com.demo.vendor.model.Vendor;
import com.demo.vendor.repository.BillRepository;
import com.demo.vendor.repository.UserRepository;
import com.demo.vendor.repository.VendorRepository;

@Service
public class UserService {

	@Autowired
	VendorRepository vendorRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	BillRepository billRepository;

	// adds the service the user has used in the database
	@Transactional
	public List<Vendor> getAllService() {
		return vendorRepository.findAll();

	}

	// gets the preferred service from the database
	@Transactional
	public List<Vendor> getprefService(String name) {
		UserDb user = userRepository.findByFirstName(name);
		return user.getPreferredSerice();
	}

//adds the preferred service
	@Transactional
	public void addprefService(String username, int id) {
		UserDb user = userRepository.findByFirstName(username);
		List<Vendor> vendorList = user.getPreferredSerice();
		Vendor vendor = vendorRepository.findById(id).get();
		vendorList.add(vendor);
		System.out.println(vendorList);
		user.setPreferredSerice(vendorList);
		System.out.println(user);
		userRepository.save(user);

	}

	// adds the bill to the user for a service
	@Transactional
	public void addBill(Bill bill) {
		this.billRepository.save(bill);
	}

	// updates the bill service and sets amount
	@Transactional
	public void updateService(Bill ser) {
		String bill = ser.getBillNumber();
		Bill user = billRepository.getUserServicesOnBill(bill);
		if (ser.getAmountPay() > 0)
			user.setAmountPay(ser.getAmountPay());
		if (ser.getPaidAmount() > 0 && (ser.getPaidAmount() != user.getPaidAmount()))
			user.setPaidAmount((user.getPaidAmount() + ser.getPaidAmount()));
		user.setPendingAmt(user.getAmountPay() - user.getPaidAmount());
		billRepository.save(user);
	}

	// gets all the services for user
	@Transactional
	public List<Bill> getusersub(int id) {
		return billRepository.getUserServices(id);

	}

	// gets the bill details based on id
	@Transactional
	public List<Bill> getVendorBill(int id) {
		return billRepository.getBillVendor(id);
	}

	// gets bill based on name
	@Transactional
	public List<Bill> getdataFromBill(String bill) {
		return billRepository.getdataFromBill(bill);
	}

	// gets the total for overall details of the payment
	@Transactional
	public List<Bill> gettotalforUser(int id) {
		return billRepository.getpaidAmountUser(id);
	}

	// gets the total for a service paid by various customers
	@Transactional
	public List<Bill> gettotalforVendor(int id) {
		return billRepository.getBillVendor(id);
	}

	// gets the total sum for the user
	@Transactional
	public int getsum(int id) {
		return billRepository.getSum(id);
	}

	// gets the overall service total paid for vendor
	@Transactional
	public int getsumVendor(int id) {
		return billRepository.getSumVendor(id);
	}

	// get the remaining amount of the vendor
	@Transactional
	public int getRemSumVendor(int id) {
		return billRepository.getRemSumVendor(id);
	}

	// gets the notification service
	@Transactional
	public List<String> getUserNoticationOfVendorService(String name) {
		return billRepository.getUserNoticationOfVendorService(name);
	}

	// gets the notification details
	public List<java.sql.Date> getDueDateFromVendor(String name) {
		// TODO Auto-generated method stub
		List<java.sql.Date> dates = billRepository.getDueDateFromVendor(name);
		return dates;

	}

	// get the pending amount of the vendor
	@Transactional
	public int getPenSumVendor(int id) {
		return billRepository.getPenSumVendor(id);
	}

	// adds the remainder for a particular user
	@Transactional
	public void addRemainder(String usrname, String venname, String venservice, String remainder) {
		int ctbp = 0;
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date currentDate = new Date();
		Date d = new Date();
		Calendar c = Calendar.getInstance();
		c.setTime(d);
		if (remainder.equals("one")) {
			c.add(Calendar.MONTH, 1);
		} else {
			c.add(Calendar.MONTH, 2);
		}
		java.sql.Date d1 = new java.sql.Date(c.getTime().getTime());
		List<Integer> v = billRepository.getindexvalue();
		for (Integer i1 : v) {
			ctbp = 0;
			ctbp = i1 + 1;
		}
		this.billRepository.insertnotification(ctbp, usrname, venname, venservice, d1);
	}

	// gets the notification of a particular user
	@Transactional
	public List getRemainder(String name) {
		return billRepository.getnotification(name);
	}


	// gets the notification name

	public List<String> getUserNoticationOfVendorName(String name) {
		// TODO Auto-generated method stub
		return billRepository.getUserNoticationOfVendorName(name);
	}


	// gets the count pf notification
	public Integer getCount(String name) {
		// TODO Auto-generated method stub
		int count = 0;
		Integer istrue;
		List<java.sql.Date> tobereturn = new ArrayList<java.sql.Date>();
		long millis = System.currentTimeMillis();
		List<java.sql.Date> dates = billRepository.getDueDateFromVendor(name);
		for (java.sql.Date datesql : dates) {
			count++;
		}
		return count;
	}

	// gets the total count
	public Integer getAllCount(String name) {
		// TODO Auto-generated method stub
		int i = 0;
		Integer istrue;
		List<String> venNames = billRepository.getUserNoticationOfVendorService(name);
		List<String> tobereturn = new ArrayList<String>();
		long millis = System.currentTimeMillis();
		List<java.sql.Date> dates = billRepository.getDueDateFromVendor(name);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String compare1;
		String compare2 = dateFormat.format(new java.util.Date());
		for (java.sql.Date datesql : dates) {		
			compare1 = dateFormat.format(datesql);
			istrue = compare1.compareTo(compare2);
			if (istrue == 0) {
				i++;
			}
		}
		return i;
	}
}
