package com.owen.nidhoggmon.respositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.owen.nidhoggmon.models.Deck;

public interface DeckListRepository extends MongoRepository<Deck, String> {

    public List<Deck> findAll();
}
