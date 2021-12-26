package com.sofkau.challenge.controller;


import com.sofkau.challenge.model.Question;
import com.sofkau.challenge.service.inter.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trivia/")
public class QuestionController {

    @Autowired
    QuestionService questionService;


    @GetMapping("/find/{id}")
    public Question readQuestion(@PathVariable int id){
        return questionService.getQuestionId(id);
    }

    @GetMapping("/find/all")
    public List<Question> getAllQuestions(){
        return questionService.getAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Question> addPlayer(@RequestBody Question q){
        Question question1 = questionService.save(q);
        return new ResponseEntity<Question>(question1, HttpStatus.CREATED);
    }
}
