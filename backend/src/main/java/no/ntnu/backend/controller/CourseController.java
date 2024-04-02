package no.ntnu.backend.controller;

import no.ntnu.backend.exception.CourseNotFoundException;
import no.ntnu.backend.model.Course;
import no.ntnu.backend.repository.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin("http://localhost:5173")
public class CourseController {
    // private static final Logger logger = LoggerFactory.getLogger(CourseController.class);

    @Autowired
    private CourseRepository courseRepository;

    @PostMapping("/course")
    Course newCourse(@RequestBody Course newCourse) {
        return courseRepository.save(newCourse);
    }

    @GetMapping()
    List<Course> getAllCourses() {
        // logger.warn("Getting all courses");
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    Course getCourseById(@PathVariable int id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new CourseNotFoundException(id));
    }

    @PutMapping("/course/{id}")
    Course updateCourse(@RequestBody Course newCourse, @PathVariable int id) {
        return courseRepository.findById(id)
                .map(course -> {
                    course.setTitle(newCourse.getTitle());
                    course.setLevelId(newCourse.getLevelId());
                    course.setCategoryId(newCourse.getCategoryId());
                    course.setStartDate(newCourse.getStartDate());
                    course.setEndDate(newCourse.getEndDate());
                    course.setCredit(newCourse.getCredit());
                    course.setHoursPerWeek(newCourse.getHoursPerWeek());
                    course.setDescription(newCourse.getDescription());
                    course.setRelatedCertification(newCourse.getRelatedCertification());
                    return courseRepository.save(course);
                }).orElseThrow(() -> new CourseNotFoundException(id));
    }

    @DeleteMapping("/course/{id}")
    String deleteCourse(@PathVariable int id){
        if(!courseRepository.existsById(id)){
            throw new CourseNotFoundException(id);
        }
        courseRepository.deleteById(id);
        return  "Course with id "+id+" has been deleted success.";
    }
}
