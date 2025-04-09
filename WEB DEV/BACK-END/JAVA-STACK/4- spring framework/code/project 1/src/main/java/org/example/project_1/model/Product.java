package org.example.project_1.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;


@Entity
public class Product {
 private  static  int productsCounter =0;
 @Id
 private int prodId;
 private String prodName;
 private float prodPrice;



 public Product(String prodName, float prodPrice) {
  this.prodId = ++productsCounter;
  this.prodName = prodName;
  this.prodPrice = prodPrice;
 }
 public  Product() {
this.prodId = ++productsCounter;
 }

 public int getProdId() {
  return prodId;
 }

 public String getProdName() {
  return prodName;
 }

 public float getProdPrice() {
  return prodPrice;
 }

 public void setProdName(String prodName) {
  this.prodName = prodName;
 }

 public void setProdPrice(float prodPrice) {
  this.prodPrice = prodPrice;
 }

 public void setProdId(int prodId) {
  this.prodId = prodId;
 }

 @Override
 public String toString() {
  return "Product{" +
          "prodId=" + prodId +
          ", prodName='" + prodName + '\'' +
          ", prodPrice=" + prodPrice +
          '}';
 }
}
