package com.demo.vendor.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.vendor.model.Vendor;
import com.demo.vendor.repository.VendorRepository;

@Service
public class VendorService {

	@Autowired
	VendorRepository vendorRepository;

	// gets all the vendor services
	@Transactional
	public List<Vendor> getVendorService(String name) {
		return vendorRepository.getVendorService(name);
	}

	// sends the details for edit
	@Transactional
	public Vendor getVendorServiceedit(int id) {
		return vendorRepository.findById(id).get();
	}

	// gets all the vendor names
	@Transactional
	public List<Vendor> getAllVendor() {
		return vendorRepository.findAll();
	}

	// gets all approved user
	@Transactional
	public List<Vendor> getApprovedUser(String name) {
		return vendorRepository.getapprovedServiceUser(name);
	}

	// gets the rejected service name
	@Transactional
	public List<Vendor> getRejectedService(String name) {
		return vendorRepository.getRejectedServiceVendor(name);
	}

	// gets all the waiting services
	@Transactional
	public List<Vendor> getWaitingService(String name) {
		return vendorRepository.getWaitingService(name);
	}

	// gets the approved service of a particular vendor
	@Transactional
	public List<Vendor> getapprovedUserAll(String name) {
		return vendorRepository.getapprovedUserAll(name);
	}

	// gets the services waiting for admin approval
	@Transactional
	public List<Vendor> getServiceForApproval() {
		return vendorRepository.getServiceForApproval();
	}

	//gets all approved user
	@Transactional
	public List<Vendor> getApprovedUserAll() {
		return vendorRepository.getapprovedServiceUserAll();
	}

	// adds the vendor
	@Transactional
	public void addVendor(Vendor vendor) {
		vendorRepository.save(vendor);
	}

	// edits and saves the vendor details
	@Transactional
	public void modifyVendor(Vendor vendor) {
		vendorRepository.save(vendor);
	}

//	@Transactional
//	public void deleteService(int id) {
//		vendorRepository.deleteById(id);
//	}

}
