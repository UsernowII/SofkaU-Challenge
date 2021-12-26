package com.sofkau.challenge.service.implement;

import com.sofkau.challenge.dao.PlayerDao;
import com.sofkau.challenge.model.Player;
import com.sofkau.challenge.service.inter.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerDao data;

    @Override
    public List<Player> getAll() {
        List<Player> list = new ArrayList<>();
        data.findAll().forEach( o -> list.add(o));
        return list;
    }

    @Override
    public Player getPlayerId(String id) {
        Optional <Player> player = data.findById(id);
        return player.orElse(null);
    }

    @Override
    public Player save(Player p) {
        return data.save(p);
    }
}
