import React from "react";

class Player {
    name: string;
    money: number;
    inventory: any[];
    currentLocation: string;


    constructor(name: string, money: number, inventory: any[], currentLocation: string) {
        this.name = name;
        this.money = money;
        this.inventory = inventory;
        this.currentLocation = currentLocation;
    }

    getName(name: string) {
        return this.name;
    }
}