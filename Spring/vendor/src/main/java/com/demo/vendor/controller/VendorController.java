package com.demo.vendor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.vendor.model.Vendor;
import com.demo.vendor.service.VendorService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin("http://localhost:4200")
public class VendorController {

	@Autowired
	VendorService vendorService;
//gets all the vendor services
	@GetMapping("/{name}")
	public List<Vendor> getAllVendor(@PathVariable String name) {
		return vendorService.getVendorService(name);
	}
//gets the services waiting for admin approval
	@GetMapping("/pending")
	public List<Vendor> getServiceForApproval() {
		return vendorService.getServiceForApproval();
	}
//gets all the apporved services 
	@GetMapping("/approved")
	public List<Vendor> getApprovedUserall() {
		return vendorService.getApprovedUserAll();
	}
// gets the approved service of a particular vendor
	@GetMapping("/approved/{name}")
	public List<Vendor> getApprovedUser(@PathVariable String name) {
		return vendorService.getapprovedUserAll(name);
	}
//gets all the waiting services
	@GetMapping("/waiting/{name}")
	public List<Vendor> getWaitingService(@PathVariable String name) {
		return vendorService.getWaitingService(name);
	}
//gets the rejected service name
	@GetMapping("/rejected/{name}")
	public List<Vendor> getRejectedService(@PathVariable String name) {
		return vendorService.getRejectedService(name);
	}
//gets all the vendor names
	@GetMapping("")
	public List<Vendor> getAll() {
		return vendorService.getAllVendor();
	}
//sends the details for edit
	@GetMapping("/edit/{id}")
	public Vendor getServiceEdit(@PathVariable int id) {
		return vendorService.getVendorServiceedit(id);
	}
//adds the vendor
	@PostMapping("")
	public void addVendor(@RequestBody Vendor vendor) {
		vendorService.addVendor(vendor);
	}

//edits and saves the vendor details
	@PutMapping("")
	public void modifyVendor(@RequestBody Vendor vendor) {
		this.vendorService.modifyVendor(vendor);
	}

}
