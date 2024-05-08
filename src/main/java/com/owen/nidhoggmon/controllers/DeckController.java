package com.owen.nidhoggmon.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.owen.nidhoggmon.models.Deck;
import com.owen.nidhoggmon.respositories.DeckListRepository;

@RestController
public class DeckController {

    private static Logger logger = LoggerFactory.getLogger(DeckController.class);
    
    @Autowired
    private DeckListRepository repository;

    @GetMapping("/deck")
    @ResponseBody
    public List<Deck> getAll()
    {
        logger.info("Getting all decks");
        List<Deck> decks = repository.findAll();

        for (Deck deck : decks) {
            logger.info(deck.toString());
        }
        return decks;
    }

    @GetMapping("/deck/{id}")
    @ResponseBody
    public String getDeck(@PathVariable(value = "id") long id) {
        logger.info(String.format("Getting ID = %x", id));
        return "ID: " + id;
    }

    @DeleteMapping("/deck/{id}")
    public void deleteDeck(@PathVariable(value = "id") long id) {
        logger.info(String.format("Deleting ID = %x", id));
    }

    @DeleteMapping("/deck/{id}/{cardId}")
    public void deleteCard(@PathVariable(value = "id") long id, @PathVariable(value = "cardId") String cardId) {
        logger.info(String.format("Removing Card ID = %s from Deck ID = %x", cardId, id));
    }
}