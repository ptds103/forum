package com.secureApi.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "ARTICLE")
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "BODY")
    private String body;

    @Column(name = "SECTION")
    private String section;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }
}
