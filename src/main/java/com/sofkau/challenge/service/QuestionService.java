package com.sofkau.challenge.service;

import com.sofkau.challenge.model.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAll();

    Question getQuestionId(int id);

}
