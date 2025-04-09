package org.example.project_1.repository;


import org.example.project_1.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepo  extends JpaRepository<Product, Integer> {


}
