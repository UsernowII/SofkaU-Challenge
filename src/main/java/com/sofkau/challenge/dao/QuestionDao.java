package com.sofkau.challenge.dao;

import com.sofkau.challenge.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionDao extends MongoRepository<Question, Integer> {

}
