package org.example.springsecuritydemo.config;


import org.example.springsecuritydemo.filter.JwtFilter;
import org.example.springsecuritydemo.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//  this is a configuration class
@Configuration
// override the default config by this
//@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    MyUserDetailsService myUserDetailsService ;
    @Autowired
    JwtFilter jwtFilter;

    @Autowired
    private CustomAuthenticationEntryPoint authenticationEntryPoint;

    @Autowired
    private CustomAccessDeniedHandler accessDeniedHandler;

    // say to spring this is SecurityFilterChain you have to follow
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// disable the csrf (crosse site request forgery)
        http.csrf(customizer->customizer.disable());

        // 1-require the login authentication:
        // 1-1 : enable authentication
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests ->
                        requests
                                .requestMatchers("/login", "/register").permitAll()
                                .anyRequest().authenticated()
                )
                .exceptionHandling(exception ->
                        exception
                                .authenticationEntryPoint(authenticationEntryPoint) //  for 401 Unauthorized
                                .accessDeniedHandler(accessDeniedHandler) //  for 403 Forbidden
                );
        // 1-2: enable the login page:
//        http.formLogin(Customizer.withDefaults()); 🚫🙅‍♀️

        // to get the response in your Postman when you send a request not the HTML page :
        http.httpBasic(Customizer.withDefaults());

//        make the session stateless:
        http.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // adding the jwtFilter before the UPAF
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();


    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        /*
        NoOpPasswordEncoder is a password encoder that performs no encoding and stores plaintext passwords.
        Note: Using NoOpPasswordEncoder in production is unsafe because it stores passwords in plaintext,
        which is vulnerable to security breaches. More secure options like BCryptPasswordEncoder are
        recommended for production systems
        */
        // // Secure password encoding
        provider.setPasswordEncoder( new BCryptPasswordEncoder());
        provider.setUserDetailsService(myUserDetailsService);
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
     return config.getAuthenticationManager();
    }



}
