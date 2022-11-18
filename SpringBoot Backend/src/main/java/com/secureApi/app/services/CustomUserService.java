package com.secureApi.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.secureApi.app.entities.User;
import com.secureApi.app.repository.UserDetailsRepository;

@Service
public class CustomUserService implements UserDetailsService {

	@Autowired
	UserDetailsRepository userDetailsRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User user = userDetailsRepository.findByUserName(username);

		if (null == user) {
			throw new UsernameNotFoundException("User Not Found with userName " + username);
		}
		return user;
	}

}
