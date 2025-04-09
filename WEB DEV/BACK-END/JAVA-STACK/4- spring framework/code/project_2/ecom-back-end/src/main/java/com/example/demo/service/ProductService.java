package com.example.demo.service;


import com.example.demo.model.Product;
import com.example.demo.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {


    @Autowired
    private  ProductRepo productRepo;

    public  Product addProduct(Product product, MultipartFile imageFile) throws IOException {
       product.setImageType(imageFile.getContentType());
       product.setImageName(imageFile.getOriginalFilename());
        product.setImage(imageFile.getBytes());

         return productRepo.save(product);
    }

    public List<Product> getProducts() {
        return  productRepo.findAll();
    }

    public Optional<Product>  getProductById(int ProductId) {

        return productRepo.findById(ProductId);
    }

    public boolean deleteProduct(int productId) {
        Optional<Product> productOpt = getProductById(productId);
        if(productOpt.isPresent()) {
            productRepo.delete(productOpt.get());
            return  true;
        }
        else
            return false;

    }

    public Product editProduct(int productId, Product product, MultipartFile imageFile) throws IOException {
        Optional<Product> productOpt = getProductById(productId);
        if(productOpt.isPresent()) {
            if(!imageFile.isEmpty()) {
                product.setId(productId);
                product.setImageName(imageFile.getOriginalFilename());
                product.setImageType(imageFile.getContentType());
                product.setImage(imageFile.getBytes());
            }

          return   productRepo.save(product);
        }
        else {
            return null;
        }

    }

    public List<Product> searchProducts(String keyword) {
        System.out.println("the keyword " + keyword);
        return  productRepo.searchProducts(keyword);
    }
}
