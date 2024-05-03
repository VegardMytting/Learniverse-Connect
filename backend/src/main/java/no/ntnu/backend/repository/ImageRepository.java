package no.ntnu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import no.ntnu.backend.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {
}