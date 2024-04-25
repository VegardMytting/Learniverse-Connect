package no.ntnu.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import no.ntnu.backend.model.Level;
import no.ntnu.backend.service.LevelService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Controller class for managing operations related to levels.
 * Handles HTTP requests/responses for level-related endpoints.
 *
 * @author Group 01
 * @version 23.05.2024
 */
@RestController
@RequestMapping("/levels")
@CrossOrigin("http://localhost:5173")
public class LevelController {

  private final LevelService levelService;

  /**
   * Constructor for LevelController.
   *
   * @param levelService The LevelService to be injected.
   */
  @Autowired
  public LevelController(LevelService levelService){
    this.levelService = levelService;

  }

  /**
   * Creates a new level.
   *
   * @param level The level object to be created.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PostMapping()
  public ResponseEntity<String> createLevel(@RequestBody Level level) {
    return this.levelService.create(level);
  }

  /**
   * Retrieves all levels.
   *
   * @return List of Level containing information about all levels.
   */
  @GetMapping()
  public List<Level> readAllLevels() {
    return this.levelService.readAll();
  }

  /**
   * Retrieves a level by its ID.
   *
   * @param id The ID of the level to retrieve.
   * @return ResponseEntity containing the requested level, if found.
   */
  @GetMapping("/{id}")
  public ResponseEntity<Level> readLevelById(@PathVariable int id) {
    return this.levelService.readById(id);
  }

  /**
   * Updates an existing level.
   *
   * @param id    The ID of the level to be updated.
   * @param level The updated level object.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @PutMapping("/{id}")
  public ResponseEntity<String> updateLevel(@PathVariable int id, @RequestBody Level level) {
    return this.levelService.update(id, level);
  }

  /**
   * Deletes a level by its ID.
   *
   * @param id The ID of the level to be deleted.
   * @return ResponseEntity indicating the success/failure of the operation.
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteLevel(@PathVariable int id) {
    return this.levelService.delete(id);
  }
}