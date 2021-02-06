package com.demo.vendor.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "vendor_details")
public class Vendor {
	@Id
	@Column(name = "ven_id")
	private int vendorId;
	@Column(name = "ven_name")
	private String vendorName;
	@Column(name = "ven_regno")
	private String regNo;
	@Column(name = "ven_address")
	private String address;
	@Column(name = "ven_country")
	private String country;
	@Column(name = "ven_state")
	private String state;
	@Column(name = "ven_email")
	private String email;
	@Column(name = "ven_contactnum")
	private int contactNumber;
	@Column(name = "ven_site")
	private String website;
	@Column(name = "ven_cert_issue_date")
	private String certIssueDate;
	@Column(name = "ven_cert_valid_date")
	private String certValidDate;
	@Column(name = "ven_year_estd")
	private String yearEstd;
	@Column(name = "ven_service")
	private String service;
	@Column(name = "ven_approved")
	private boolean apporved;
	@Column(name = "ven_submitted")
	private boolean submitted;

	@ManyToMany(mappedBy = "preferredSerice", fetch = FetchType.EAGER)
	private Set<UserDb> userList;

	public Vendor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vendor(int vendorId, String vendorName, String regNo, String address, String country, String state,
			String email, int contactNumber, String website, String certIssueDate, String certValidDate,
			String yearEstd, String service, boolean apporved, boolean submitted) {
		super();
		this.vendorId = vendorId;
		this.vendorName = vendorName;
		this.regNo = regNo;
		this.address = address;
		this.country = country;
		this.state = state;
		this.email = email;
		this.contactNumber = contactNumber;
		this.website = website;
		this.certIssueDate = certIssueDate;
		this.certValidDate = certValidDate;
		this.yearEstd = yearEstd;
		this.service = service;
		this.apporved = apporved;
		this.submitted = submitted;
	}

	public int getVendorId() {
		return vendorId;
	}

	public void setVendorId(int vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public String getRegNo() {
		return regNo;
	}

	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getCertIssueDate() {
		return certIssueDate;
	}

	public void setCertIssueDate(String certIssueDate) {
		this.certIssueDate = certIssueDate;
	}

	public String getCertValidDate() {
		return certValidDate;
	}

	public void setCertValidDate(String certValidDate) {
		this.certValidDate = certValidDate;
	}

	public String getYearEstd() {
		return yearEstd;
	}

	public void setYearEstd(String yearEstd) {
		this.yearEstd = yearEstd;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public boolean isApporved() {
		return apporved;
	}

	public void setApporved(boolean apporved) {
		this.apporved = apporved;
	}

	public boolean isSubmitted() {
		return submitted;
	}

	public void setSubmitted(boolean submitted) {
		this.submitted = submitted;
	}

	@Override
	public String toString() {
		return "Vendor [vendorId=" + vendorId + ", vendorName=" + vendorName + ", regNo=" + regNo + ", address="
				+ address + ", country=" + country + ", state=" + state + ", email=" + email + ", contactNumber="
				+ contactNumber + ", website=" + website + ", certIssueDate=" + certIssueDate + ", certValidDate="
				+ certValidDate + ", yearEstd=" + yearEstd + ", service=" + service + ", apporved=" + apporved
				+ ", submitted=" + submitted + "]";
	}

}
