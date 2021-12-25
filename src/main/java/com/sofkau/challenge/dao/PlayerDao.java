package com.sofkau.challenge.dao;

import com.sofkau.challenge.model.Player;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PlayerDao extends MongoRepository<Player, String> {

}
