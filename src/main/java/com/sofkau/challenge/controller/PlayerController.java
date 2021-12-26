package com.sofkau.challenge.controller;


import com.sofkau.challenge.service.inter.PlayerService;
import com.sofkau.challenge.model.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/score/")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping("/all")
    public List<Player> getAll(){
        return playerService.getAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Player> addPlayer(@RequestBody Player p){
        Player player1 = playerService.save(p);
        return new ResponseEntity<Player>(player1, HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public Player readPlayer(@PathVariable String id){
        return playerService.getPlayerId(id);
    }

    @PutMapping("/add")
    public ResponseEntity<Player> editPlayer(@RequestBody Player p){
        Player player1 = playerService.save(p);
        return new ResponseEntity<Player>(player1, HttpStatus.ACCEPTED);
    }
}
