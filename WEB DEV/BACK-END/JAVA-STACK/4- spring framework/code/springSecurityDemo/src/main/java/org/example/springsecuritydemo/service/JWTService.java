package org.example.springsecuritydemo.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JWTService {
    private static  String JWT_SECRET = "";
    private  static  KeyGenerator keyGenerator;
    private  static  SecretKey secretKey;

    static {
        try {
            keyGenerator = KeyGenerator.getInstance("HmacSHA256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    public JWTService() {

        secretKey = keyGenerator.generateKey();
        JWT_SECRET=Base64.getEncoder().encodeToString(secretKey.getEncoded());

    }

    public String generateToken(String username, long expirationMinutes) {

        Map<String, Object> claims = new HashMap<>();
        Date issuedAt = Date.from(Instant.now());
        Date expiration = new Date(System.currentTimeMillis() + expirationMinutes * 60 * 1000L); // Convert minutes to milliseconds

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(issuedAt)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .compact();

    }
    public String generateToken(String username) {
        long expirationMinutes =  15;
      return generateToken(username,expirationMinutes);
    }

    public boolean validateToken(String token, UserDetails userDetails) {
    final  String username = extractUsername(token);
    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload();

    }

    private     <T> T extractClaim(String token, Function<Claims, T> claimResolver){
        try {
            final  Claims  claims= extractAllClaims(token);
            return  claimResolver.apply(claims);
        }
        catch (Exception e) {
            return null;
        }
    }
    public boolean isTokenExpired(String token) {
        return extractException(token).before(new Date());
    }

    public Date extractException(String token) {
        return  extractClaim(token, Claims::getExpiration);
    }


    public String extractUsername(String token) {
    return   extractClaim(token, Claims::getSubject);
    }
}
