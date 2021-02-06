package com.demo.vendor.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class UserDb {

	@Id
	@Column(name = "us_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int userId;

	@Column(name = "us_fname")
	String firstName;
	@Column(name = "us_lname")
	String lastName;
	@Column(name = "us_age")
	int age;
	@Column(name = "us_gender")
	String gender;
	@Column(name = "us_cnumber")
	int contactNumber;
	@Column(name = "us_pannumber")
	String panNumber;
	@Column(name = "us_aadhar")
	String aadhar;
	@Column(name = "us_password")
	String password;
	@Column(name = "us_setrole")
	String role;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "ur_us_id"), inverseJoinColumns = @JoinColumn(name = "ur_role_id"))
	private Set<Role> roleList;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_preferred_service", joinColumns = @JoinColumn(name = "user_us_id"), inverseJoinColumns = @JoinColumn(name = "vendor_details_ven_id"))
	private List<Vendor> preferredSerice;

	public UserDb() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDb(int userId, String firstName, String lastName, int age, String gender, int contactNumber,
			String panNumber, String aadhar, String password, String role, Set<Role> roleList,
			List<Vendor> preferredSerice) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.contactNumber = contactNumber;
		this.panNumber = panNumber;
		this.aadhar = aadhar;
		this.password = password;
		this.role = role;
		this.roleList = roleList;
		this.preferredSerice = preferredSerice;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(int contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Set<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(Set<Role> roleList) {
		this.roleList = roleList;
	}

	public List<Vendor> getPreferredSerice() {
		return preferredSerice;
	}

	public void setPreferredSerice(List<Vendor> preferredSerice) {
		this.preferredSerice = preferredSerice;
	}

	@Override
	public String toString() {
		return "UserDb [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", gender=" + gender + ", contactNumber=" + contactNumber + ", panNumber=" + panNumber + ", aadhar="
				+ aadhar + ", password=" + password + ", role=" + role + ", roleList=" + roleList + ", preferredSerice="
				+ preferredSerice + "]";
	}

}
