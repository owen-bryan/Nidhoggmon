package com.owen.nidhoggmon.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.owen.nidhoggmon.models.Deck;
import com.owen.nidhoggmon.respositories.DeckListRepository;

@Service
public class DeckListService {

    @Autowired
    private DeckListRepository repository;

    public List<Deck> findAll ()
    {
        List<Deck> result = repository.findAll();
        
        return result;
    }

    public boolean newDeck(Deck deck)
    {
        Deck result = repository.save(deck);

        return repository.existsById(result.getId().toString());
    }
}
