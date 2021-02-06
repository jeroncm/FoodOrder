package com.demo.vendor.security;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.vendor.exception.UserAlreadyExistsException;
import com.demo.vendor.model.Role;
import com.demo.vendor.model.UserDb;
import com.demo.vendor.repository.RoleRepository;
import com.demo.vendor.repository.UserRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	public AppUserDetailsService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public AppUserDetailsService(UserRepository userRepository, RoleRepository roleRepository) {
		super();
		this.userRepository = userRepository;
		this.roleRepository = roleRepository;
	}

	AppUser appUser;
	UserDb user;

	public UserDetails loadUserByUsername(String firstName) throws UsernameNotFoundException {

		user = userRepository.findByFirstName(firstName);
		if (user == null)
			throw new UsernameNotFoundException("username not found");
		else
			appUser = new AppUser(user);
		return appUser;
	}

	public PasswordEncoder passwordEncoder() {

		return new BCryptPasswordEncoder();
	}

	public void signup(UserDb user) throws UserAlreadyExistsException {
		Role role;
		UserDb userx = userRepository.findByFirstName(user.getFirstName());
		if (userx != null) {
			throw new UserAlreadyExistsException();
		} else {

			user.setPassword(passwordEncoder().encode(user.getPassword()));
			if (user.getRole().equals("User")) {
				role = roleRepository.findById(2);
			}

			else {
				role = roleRepository.findById(3);
			}

			System.out.println(role);
			Set<Role> roleList = new HashSet<Role>();
			roleList.add(role);
			user.setRoleList(roleList);
			userRepository.save(user);

		}

	}

}
