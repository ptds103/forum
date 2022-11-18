package com.secureApi.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.secureApi.app.entities.Article;


@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}