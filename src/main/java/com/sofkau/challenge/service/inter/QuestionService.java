package com.sofkau.challenge.service.inter;

import com.sofkau.challenge.model.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAll();

    Question getQuestionId(int id);

    Question save(Question q);

}
