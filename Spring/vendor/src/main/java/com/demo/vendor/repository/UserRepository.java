package com.demo.vendor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.vendor.model.UserDb;
import com.demo.vendor.model.Vendor;

@Repository
public interface UserRepository extends JpaRepository<UserDb, Integer> {
	UserDb findByFirstName(String firstName);

	@Modifying
	@Query(value = "Insert into user_preferred_service(up_id,user_us_id,vendor_details_ven_id) values(7,2,98)", nativeQuery = true)
	void getjjj();

}
