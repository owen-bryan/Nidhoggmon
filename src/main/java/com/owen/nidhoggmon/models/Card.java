package com.owen.nidhoggmon.models;

public class Card {

    private String card_id;
    private String name;
    private int qty;

    public Card(String card_id, String name, int qty) {
        this.card_id = card_id;
        this.name = name;
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "Card [card_id=" + card_id + ", name=" + name + ", qty=" + qty + "]";
    }

    public String getCard_id() {
        return card_id;
    }

    public void setCard_id(String card_id) {
        this.card_id = card_id;
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