package com.sofkau.challenge.controller;


import com.sofkau.challenge.model.Question;
import com.sofkau.challenge.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
