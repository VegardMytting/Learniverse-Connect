package no.ntnu.backend.controller;

import no.ntnu.backend.exception.UserNotFoundException;
import no.ntnu.backend.model.User;
import no.ntnu.backend.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(CourseController.class);
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        logger.warn("Getting a user");
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setRoleId(newUser.getRoleId());
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setStartDate(newUser.getStartDate());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }
}
