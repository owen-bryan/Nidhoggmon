package com.owen.nidhoggmon.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.owen.nidhoggmon.models.Deck;
import com.owen.nidhoggmon.services.DeckListService;

@RestController
public final class DeckController {

    private final static Logger logger = LoggerFactory.getLogger(DeckController.class);

    @Autowired
    private DeckListService service;

    @GetMapping({ "/deck", "/deck/" })
    @ResponseBody
    public List<Deck> getAll() {
        logger.info("Getting all decks");
        List<Deck> decks = service.findAll();

        for (Deck deck : decks) {
            logger.info(deck.toString());
        }

        return decks;
    }

    @GetMapping("/deck/{id}")
    @ResponseBody
    public String getDeck(@PathVariable(value = "id") String id) {
        logger.info(String.format("Getting ID = %x", id));
        return "ID: " + id;
    }

    @DeleteMapping("/deck/{id}")
    public void deleteDeck(@PathVariable(value = "id") String id) {
        logger.info(String.format("Deleting ID = %x", id));
    }

    @DeleteMapping("/deck/{id}/{cardId}")
    public void deleteCard(@PathVariable(value = "id") String id, @PathVariable(value = "cardId") String cardId) {
        logger.info(String.format("Removing Card ID = %s from Deck ID = %x", cardId, id));
    }

    @PostMapping({ "/deck", "/deck/" })
    @ResponseBody
    public boolean newDeck(@RequestBody Deck deck) {

        return service.newDeck(deck);
    }
}
