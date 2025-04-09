package org.example.project_1.controller;

import org.example.project_1.model.Product;
import org.example.project_1.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService service;

    @GetMapping
    List<Product> getProducts() {
        return service.getProducts();
    }

    @GetMapping("/{productId}")
    Optional<Product> getProduct(@PathVariable int productId) {
        System.out.println("the product");
        return  service.getProductById(productId);
    }

    @PostMapping
    Optional<Product> addProduct(@RequestBody Product product) {
        System.out.println("the product"+product);
        Optional<Product>  productToAdd = service.addProduct(product);
     return productToAdd;
    }
    @PutMapping("/{productId}")
    String updateProduct(@PathVariable int productId,@RequestBody Product product) {
       return service.updateProduct(productId,product);
    }
    @DeleteMapping("/{productId}")
    String deleteProduct(@PathVariable int productId) {
return  service.deleteProduct(productId);
    }

}
