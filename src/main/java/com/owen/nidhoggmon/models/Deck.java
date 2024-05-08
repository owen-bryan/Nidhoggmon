package com.owen.nidhoggmon.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document ("DeckLists")
public record Deck(@Id String id, String name, List<Card> main_deck, List<Card> egg_deck, int count ) {}