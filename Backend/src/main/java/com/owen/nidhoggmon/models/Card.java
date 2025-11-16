package com.owen.nidhoggmon.models;

import java.io.Serializable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Card implements Serializable {

    private String cardId;
    private String name;
    private int qty;

    private final static Logger logger = LoggerFactory.getLogger(Card.class);

    public Card() {
        logger.info("Generating new card");
    }

    public Card(String cardId, String name, int qty) {
        this();
        this.cardId = cardId;
        this.name = name;
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "Card [cardId=" + cardId + ", name=" + name + ", qty=" + qty + "]";
    }

    public String getCardId() {
        return cardId;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }
}