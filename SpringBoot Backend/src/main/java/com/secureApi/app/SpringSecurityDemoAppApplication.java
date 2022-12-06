package com.secureApi.app;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.secureApi.app.entities.Authority;
import com.secureApi.app.entities.User;
// import com.secureApi.app.repository.UserDetailsRepository;

@SpringBootApplication
public class SpringSecurityDemoAppApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;


	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);
	}

	@PostConstruct
	protected void init() {

		List<Authority> authorityList = new ArrayList<>();

		authorityList.add(createAuthority("USER", "User role"));
		authorityList.add(createAuthority("ADMIN", "Admin role"));

		User user = new User();
		//
		user.setUserName("DocHolliday");
		user.setFirstName("Doc ");
		user.setLastName("Holiday");
		//
		user.setPassword(passwordEncoder.encode("barkbark22"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);

	}

	private Authority createAuthority(String roleCode, String roleDescription) {
		Authority authority = new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}

}
