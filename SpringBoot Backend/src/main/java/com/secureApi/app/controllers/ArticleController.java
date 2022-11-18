package com.secureApi.app.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.swing.event.ListSelectionEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secureApi.app.entities.Article;
import com.secureApi.app.entities.User;
import com.secureApi.app.exception.UserNotFoundException;
import com.secureApi.app.repository.ArticleRepository;
import com.secureApi.app.repository.UserDetailsRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {

    @Autowired
    private ArticleRepository ArticleRepository;
    private UserDetailsRepository UserDetailsRepository;

    @PostMapping("/article")
    Article newArticle(@RequestBody Article newArticle) {
        return ArticleRepository.save(newArticle);
    }

    @GetMapping("/article")
    public List<Article> getAllArticles() {
        return ArticleRepository.findAll();
    }

 
    @GetMapping("/article/user/{user}")
    public List<Article> getTopArticle(@PathVariable String user){
        List<Article> article = ArticleRepository.findAll();
        return article.stream().filter(c-> c.getUsername().equals(user))
        .collect(Collectors.toList());
    }



    @GetMapping("/article/{id}")
    Article getArticleById(@PathVariable Long id) {
        return ArticleRepository.findById(id + 1)
                .orElseThrow(() -> new UserNotFoundException(id + 1));
    }

    @PatchMapping("/article/{id}")
    Article updateUser(@RequestBody Article putArticle, @PathVariable Long id) {
        return ArticleRepository.findById(id)
                .map(user -> {
                    user.setTitle(putArticle.getTitle());
                    user.setBody(putArticle.getBody());
                    user.setSection(putArticle.getSection());
                    return ArticleRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/article/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!ArticleRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        ArticleRepository.deleteById(id);
        return "User with id " + id + "has been deleted successfully";
    }

}
