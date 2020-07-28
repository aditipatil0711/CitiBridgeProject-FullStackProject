package com.citi.stockrecommender.dao;

import com.citi.stockrecommender.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "user",path = "user",exported = false)
public interface UserRepository extends JpaRepository<User, Long> {
}
