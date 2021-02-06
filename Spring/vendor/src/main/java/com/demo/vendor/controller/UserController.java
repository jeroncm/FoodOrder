package com.demo.vendor.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.vendor.model.Bill;
import com.demo.vendor.model.Vendor;
import com.demo.vendor.security.AppUserDetailsService;
import com.demo.vendor.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/users")
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	AppUserDetailsService appUserDetailsService;

	@Autowired
	UserService userService;

	public static List<UserDetails> userDetailList = new ArrayList<>();

	public UserController() {
		super();

	}

//adds the service the user has used in the database
	@PostMapping("/{username}/{id}")
	public void addCartItem(@PathVariable String username, @PathVariable int id) {
		this.userService.addprefService(username, id);
		;
		LOGGER.info("inside addto cart");
	}

// gets the preferred service from the database
	@GetMapping("/preferred/{name}")
	public List<Vendor> getPrefService(@PathVariable String name) {
		return userService.getprefService(name);
	}

//adds the bill to the user for a service
	@PostMapping("")
	public void addbill(@RequestBody Bill bill) {
		System.out.println(bill);
		this.userService.addBill(bill);
	}

//adds the remainder for a particular user
	@PostMapping("/{usrname}/{venname}/{venservice}/{remainder}")
	public void addRemainder(@PathVariable String usrname, @PathVariable String venname,
			@PathVariable String venservice, @PathVariable String remainder) {

		this.userService.addRemainder(usrname, venname, venservice, remainder);
	}

// updates the bill service and sets amount
	@PutMapping("")
	public void updateUserService(@RequestBody Bill bill) {
		System.out.println(bill);
		userService.updateService(bill);
	}

//sets the amount for the user
	@PutMapping("/userbill")
	public void updateUserBill(@RequestBody Bill bill) {
		System.out.println(bill);
		userService.updateService(bill);
	}

//gets all the services for user
	@GetMapping("/{id}")
	public List<Bill> getUserServices2(@PathVariable int id) {

		return userService.getusersub(id);
	}

//gets the bill details based on id
	@GetMapping("/bill/{id}")
	public List<Bill> getBillVendor(@PathVariable int id) {
		return userService.getVendorBill(id);
	}

//gets bill based on name
	@GetMapping("/billdata/{bill}")
	public List<Bill> getBillVendor(@PathVariable String bill) {

		return userService.getdataFromBill(bill);
	}

//gets the total for overall details of the payment 
	@GetMapping("/history/{id}")
	public List<Bill> getHistory(@PathVariable int id) {

		return userService.gettotalforUser(id);
	}

//gets the total for a service paid by various customers
	@GetMapping("/historyven/{id}")
	public List<Bill> getHistoryVendor(@PathVariable int id) {

		return userService.gettotalforVendor(id);
	}

//gets the total sum for the user
	@GetMapping("/sum/{id}")
	public int getsum(@PathVariable int id) {

		return userService.getsum(id);
	}

//gets the overall service total paid for vendor
	@GetMapping("/vendorsum/{id}")
	public int getsumVEndor(@PathVariable int id) {
		return userService.getsumVendor(id);
	}

//get the remaining amount of the vendor
	@GetMapping("/pending/{id}")
	public int getRemSumVendor(@PathVariable int id) {

		return userService.getRemSumVendor(id);
	}

	// get the pending amount of the vendor
	@GetMapping("/remain/{id}")
	public int getPenSumVendor(@PathVariable int id) {

		return userService.getPenSumVendor(id);
	}

//gets the notification of a particular user
	@GetMapping("/notify/{name}")
	public List getNotification(@PathVariable String name) {

		return userService.getRemainder(name);
	}

//gets the count of notification
	@GetMapping("/getcount/{name}")
	public Integer getCount(@PathVariable String name) {

		return userService.getCount(name);
	}

//gets the total count
	@GetMapping("/getallcount/{name}")
	public Integer getAllCount(@PathVariable String name) {

		return userService.getAllCount(name);
	}

//gets the notification service
	@GetMapping("/getusernotificationofvendorservice/{name}")
	public List<String> getUserNoticationOfVendorService(@PathVariable String name) {
		return userService.getUserNoticationOfVendorService(name);
	}

	// gets the notification name
	@GetMapping("/getusernotificationofvendorname/{name}")
	public List<String> getUserNoticationOfVendorName(@PathVariable String name) {
		return userService.getUserNoticationOfVendorName(name);
	}

	// gets the notification details
	@GetMapping("/getduedatefromvendor/{name}")
	public List<java.sql.Date> getDueDateFromVendor(@PathVariable String name) {
		return userService.getDueDateFromVendor(name);
	}
}
