package com.sofkau.challenge.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "player")
@AllArgsConstructor
@NoArgsConstructor
public class Player {

    @Id
    @Getter @Setter
    private  String id;

    @Getter @Setter
    private String usuario;

    @Getter @Setter
    private int lvlId;

    @Getter @Setter
    private double totalScore;



}
