package com.sofkau.challenge.service.implement;

import com.sofkau.challenge.dao.QuestionDao;
import com.sofkau.challenge.model.Question;
import com.sofkau.challenge.service.inter.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService {


    @Autowired
    private QuestionDao data;

    @Override
    public List<Question> getAll() {
        List <Question> list = new ArrayList<>();
        data.findAll().forEach( o -> list.add(o));
        return list;
    }

    @Override
    public Question getQuestionId(int id) {
        Optional<Question> obj = data.findById(id);
        return obj.orElse(null);
    }

    @Override
    public Question save(Question q) {
        return data.save(q);
    }
}
