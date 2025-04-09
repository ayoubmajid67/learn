package org.example.project_1.service;

import org.example.project_1.model.Product;

import org.example.project_1.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public    List<Product> getProducts(){

        return productRepo.findAll();
    }

    public Optional<Product> getProductById(int productId){
     return  productRepo.findById(productId);
    }

    public Optional<Product> addProduct(Product product){
      if(!getProductById(product.getProdId()).isPresent()){
          productRepo.save(product);
          return Optional.of(product);
      }
      else
          return Optional.empty();

    }
    public String updateProduct(int productId, Product product) {

        Optional<Product> searchProduct = getProductById(productId);

        if (searchProduct.isPresent()) {
            product.setProdId(productId);
            productRepo.save(product);
         return "The product has been updated";
        }

        return "The product does not exist";
    }

    public String deleteProduct(int productId) {
      Optional<Product> searchProduct = getProductById(productId);
      if (searchProduct.isPresent()) {
          productRepo.delete(searchProduct.get());
          return  "the products was successfully deleted";
      }
      else
          return "the product was not found";
    }

}
