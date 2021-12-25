package com.sofkau.challenge.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "question")
public class Question {

    @Id
    @Getter @Setter
    private  int id;

    @Getter @Setter
    private String category;

    @Getter @Setter
    private String question;

    @Getter @Setter
    private String answer;

    @Getter @Setter
    private String wrongAnswer1;

    @Getter @Setter
    private String wrongAnswer2;

    @Getter @Setter
    private String wrongAnswer3;
}
