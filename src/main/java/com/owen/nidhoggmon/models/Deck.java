package com.owen.nidhoggmon.models;

import java.util.List;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

@Document("DeckLists")
public class Deck {

    private final static Logger logger = LoggerFactory.getLogger(Deck.class);

    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId id;
    @Field("name")
    private String name;
    @Field("main_deck")
    private List<Card> mainDeck;
    @Field("egg_deck")
    private List<Card> eggDeck;
    @Field("count")
    private int count;

    public Deck() {
        logger.info("Generating new Deck Object.");
    }

    public Deck(String name, List<Card> main_deck, List<Card> egg_deck, int count) {
        this();
        this.id = null;
        this.name = name;
        this.mainDeck = main_deck;
        this.eggDeck = egg_deck;
        this.count = count;
    }

    public Deck(ObjectId id, String name, List<Card> main_deck, List<Card> egg_deck, int count) {
        this();
        this.id = id;
        this.name = name;
        this.mainDeck = main_deck;
        this.eggDeck = egg_deck;
        this.count = count;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Deck other = (Deck) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (mainDeck == null) {
            if (other.mainDeck != null)
                return false;
        } else if (!mainDeck.equals(other.mainDeck))
            return false;
        if (eggDeck == null) {
            if (other.eggDeck != null)
                return false;
        } else if (!eggDeck.equals(other.eggDeck))
            return false;
        if (count != other.count)
            return false;
        return true;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Card> getMainDeck() {
        return mainDeck;
    }

    public void setMainDeck(List<Card> main_deck) {
        this.mainDeck = main_deck;
    }

    public List<Card> getEggDeck() {
        return eggDeck;
    }

    public void setEggDeck(List<Card> egg_deck) {
        this.eggDeck = egg_deck;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Deck [id=" + id + ", name=" + name + ", main_deck=" + mainDeck + ", egg_deck=" + eggDeck + ", count="
                + count + "]";
    }

}