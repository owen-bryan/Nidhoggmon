package com.owen.nidhoggmon.models;

import org.springframework.data.annotation.Id;

public record Card (@Id String card_id, String name, int qty) {}