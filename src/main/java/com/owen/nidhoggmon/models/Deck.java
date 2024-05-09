package com.owen.nidhoggmon.models;

import java.util.List;

// import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("DeckLists")
public class Deck {

    @Id
    private ObjectId id;

    private String name;
    @DBRef
    private List<Card> main_deck;
    @DBRef
    private List<Card> egg_deck;
    private int count;

    public Deck () {}

    
    public Deck(String name, List<Card> main_deck, List<Card> egg_deck, int count) {
        this.id = null;
        this.name = name;
        this.main_deck = main_deck;
        this.egg_deck = egg_deck;
        this.count = count;
    }

    public Deck(ObjectId id, String name, List<Card> main_deck, List<Card> egg_deck, int count) {
        this.id = id;
        this.name = name;
        this.main_deck = main_deck;
        this.egg_deck = egg_deck;
        this.count = count;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((main_deck == null) ? 0 : main_deck.hashCode());
        result = prime * result + ((egg_deck == null) ? 0 : egg_deck.hashCode());
        result = prime * result + count;
        return result;
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
        if (main_deck == null) {
            if (other.main_deck != null)
                return false;
        } else if (!main_deck.equals(other.main_deck))
            return false;
        if (egg_deck == null) {
            if (other.egg_deck != null)
                return false;
        } else if (!egg_deck.equals(other.egg_deck))
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

    public List<Card> getMain_deck() {
        return main_deck;
    }

    public void setMain_deck(List<Card> main_deck) {
        this.main_deck = main_deck;
    }

    public List<Card> getEgg_deck() {
        return egg_deck;
    }

    public void setEgg_deck(List<Card> egg_deck) {
        this.egg_deck = egg_deck;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Deck [id=" + id + ", name=" + name + ", main_deck=" + main_deck + ", egg_deck=" + egg_deck + ", count="
                + count + "]";
    }

}