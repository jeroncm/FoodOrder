package com.demo.vendor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.vendor.model.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Integer> {

	@Query(value = "SELECT * FROM vendor_details WHERE ven_name = ?", nativeQuery = true)
	List<Vendor> getVendorService(String name);

	@Query(value = "SELECT * FROM vendor_details WHERE ven_name = ? && (ven_approved = 1 && ven_submitted = 1)", nativeQuery = true)
	List<Vendor> getapprovedServiceUser(String name);

	@Query(value = "SELECT * FROM vendor_details WHERE (ven_approved = 1 && ven_submitted = 1)", nativeQuery = true)
	List<Vendor> getapprovedServiceUserAll();

	@Query(value = "SELECT * FROM vendor_details WHERE ven_name = ? && (ven_approved = 1 && ven_submitted = 1)", nativeQuery = true)
	List<Vendor> getapprovedUserAll(String name);

	@Query(value = "SELECT * FROM vendor_details WHERE ven_name = ? && (ven_approved = 0 && ven_submitted = 0)", nativeQuery = true)
	List<Vendor> getRejectedServiceVendor(String name);

	@Query(value = "SELECT * FROM vendor_details WHERE  (ven_approved = 0 && ven_submitted = 1)", nativeQuery = true)
	List<Vendor> getServiceForApproval();

	@Query(value = "SELECT * FROM vendor_details WHERE ven_name = ? && (ven_approved = 0 && ven_submitted = 1)", nativeQuery = true)
	List<Vendor> getWaitingService(String name);

}
