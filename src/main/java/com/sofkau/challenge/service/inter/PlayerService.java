package com.sofkau.challenge.service.inter;

import com.sofkau.challenge.model.Player;

import java.util.List;

public interface PlayerService {

    List<Player> getAll();

    Player getPlayerId(String id);

    Player save(Player p);
}
