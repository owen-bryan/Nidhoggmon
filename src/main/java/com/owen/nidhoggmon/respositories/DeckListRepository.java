package com.owen.nidhoggmon.respositories;

// import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.owen.nidhoggmon.models.Deck;

@Repository
public interface DeckListRepository extends MongoRepository<Deck, String>{

    // public List<Deck> findAll ();
}
