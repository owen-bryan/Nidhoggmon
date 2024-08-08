package com.owen.nidhoggmon.services;

import java.util.List;

import org.apache.tomcat.util.http.fileupload.impl.IOFileUploadException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.owen.nidhoggmon.models.Card;
import com.owen.nidhoggmon.models.Deck;
import com.owen.nidhoggmon.respositories.DeckListRepository;

@Service
public class DeckListService {

    private static final Logger logger = LoggerFactory.getLogger(DeckListService.class);
    @Autowired
    private DeckListRepository repository;

    public List<Deck> findAll ()
    {
        List<Deck> result = repository.findAll();
        
        return result;

    }

    public boolean addCard (String id, Card card)
    {
        Deck d = repository.findById(id).orElse(null);

        if (d != null)
            d.getMainDeck().add(card);
        else
            return false;

        return true;
    }

    public boolean deleteDeck (String id)
    {
        try {
            repository.deleteById(id);
            
        } catch (IllegalArgumentException e) {
            logger.error(e.toString());
            return false;
        }

        return true;
    }

    public boolean deleteCard(String id, String cardId)
    {
        Deck deck = repository.findById(id).orElseThrow();

        for (int i = 0; i < deck.getMainDeck().size(); i++)
        {
            if (deck.getMainDeck().get(i).equals(cardId))
            {
                deck.getMainDeck().remove(i);

                repository.save(deck);
                return true;
            }
        }

        return false;
    }
    
    public boolean deleteCard(String id, String cardId, int qty)
    {
        Deck deck = repository.findById(id).orElseThrow();

        for (int i = 0; i < deck.getMainDeck().size(); i++)
        {
            if (deck.getMainDeck().get(i).equals(cardId))
            {
                deck.getMainDeck().get(i).setQty(deck.getMainDeck().get(i).getQty() - qty);
                
                repository.save(deck);

                if (deck.getMainDeck().get(i).getQty() == 0)
                {
                    
                }
                
                return true;
            }
        }

        return false;
    }

    public Deck findById (String id)
    {
        return repository.findById (id).orElseThrow();
    }

    public boolean newDeck(Deck deck)
    {
        Deck result = repository.save(deck);

        return repository.existsById(result.getId().toString());
    }
}
