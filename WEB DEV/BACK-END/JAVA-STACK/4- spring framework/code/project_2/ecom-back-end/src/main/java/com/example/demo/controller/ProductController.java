package com.example.demo.controller;


import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> great() {
        List<Product> products = productService.getProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProduct(@PathVariable("productId") int productId) {
        Optional<Product> productOpt = productService.getProductById(productId);

        if (productOpt.isPresent()) {
            return new ResponseEntity<>(productOpt.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{productId}/image")
    public ResponseEntity<byte[]> getProductImage(@PathVariable("productId") int productId) {
        Optional<Product> productOpt = productService.getProductById(productId);
        if (productOpt.isPresent()) {
            return new ResponseEntity<>(productOpt.get().getImage(), HttpStatus.OK);

        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) {
        try {
            Product product1 = productService.addProduct(product, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<String> deleteProduct(@PathVariable int productId) {
        boolean isProductDeleted = productService.deleteProduct(productId);
        if (isProductDeleted) {
            return new ResponseEntity<>("Product deleted", HttpStatus.OK);
        }
        else
        return new ResponseEntity<>("Product not deleted", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable int productId, @RequestPart Product product, @RequestPart MultipartFile imageFile) throws IOException {

        Product editedProduct = productService.editProduct(productId,product,imageFile);
        if(editedProduct!= null){
            return new ResponseEntity<>(editedProduct, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("Product not updated", HttpStatus.BAD_REQUEST);

    }

    @GetMapping("/search")
    public ResponseEntity<?>  searchProducts(@RequestParam String keyword) {
        List<Product> products = productService.searchProducts(keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
