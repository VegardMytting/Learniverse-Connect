// package no.ntnu.webapp.group01.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http
//             .csrf().disable() // Disable CSRF for simplicity
//             .authorizeRequests()
//                 .antMatchers(HttpMethod.OPTIONS, "/api/**").permitAll() // Allow OPTIONS requests without authentication
//                 .anyRequest().authenticated()
//             .and();
//     }
// }
