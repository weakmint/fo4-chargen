var c,
s
charGenerator = {
    charValues: {
        special: {
            strength: 1,
            perception: 1,
            endurance: 1,
            charisma: 1,
            intelligence: 1,
            agility: 1,
            luck: 1
        },
        traits: [],
        className: "",
        startingLocation: ""
    },

    settings: {
        specialPoints: 22,
        maxTraits: 2,
        classList: [
            'Vault Enthusiast',
            'Survivalist',
            'Scavenger',
            'Hunter',
            'Raider',
            'Mechanic',
            'Gangster',
            'Trader',
            'Farmer',
            'Drunk',
            'Doctor',
            'Scientist',
            'Mercenary',
            'Ballplayer',
            'Drifter / Thug',
            'Thief',
            'Sailor',
            'Greaser',
            'Scout / Sniper',
            'Radiation Explorer',
            'BoS Initiate',
            'Railroad Tourist',
            'Escaped Synth',
            'Minuteman',
            'Church of Atom Novice',
            'Gunner Conscript',
            'Forged Member',
            'Chinese Agent',
            'Wealthy wastelander',
            'Poor wastelander',
            'Cannibal',
            'Enclave remnant',
            'NCR Ranger',
            'Rust Devil',
            'Trapper,',
            'Pack member',
            'Operators member',
            'Disciples member',
        ],
        locationList: [
            'Outside Vault 111',
            'Sanctuary root cellar',
            'Robotics Disposal Ground',
            'Ranger Cabin',
            'Raider group',
            'Red Rocket',
            'Concord house',
            'Old bus',
            'Drumlin Diner',
            'Tenpines bluff',
            'Lonely chapel',
            'Rocky Narrows park',
            'wildwood cemetary',
            'Lake quannapowitt',
            'Relay Tower 1DL-109',
            'Union Hope Cathedral',
            'Vault 81',
            'Diamond City Outskirts',
            'Boylston Club',
            'Goodneighbor',
            'Bunker Hill',
            'Relay Tower 0MC-810',
            'Greentop Nursery',
            'Roadside Pines motel',
            'Egret Tours Marina',
            'Fairline Hill Estates',
            'Castle',
            'Crater of Atom',
            'Somerville Place',
            'Parson\'s Creamery',
            'Glowing Sea',
            'Outside Quincy',
            'Atom Cats Garage',
            'Near Spectacle Island',
            'Murkwater',
            'Nordhagen Beach',
            'Nahant Oceanological Society',
            'Hugo\'s Hole',
        ],
        traitList: [
            'No trait',
            'Broad Shoulders',
            'Bruiser',
            'Claustrophobia',
            'Early Bird',
            'Fast Metabolism',
            'Fast Shot',
            'Finesse',
            'Four Eyes',
            'Gifted',
            'Good Natured',
            'Heavy Handed',
            'Hot Blooded',
            'Kamikaze',
            'Loose Cannon',
            'Night Owl',
            'Small Frame',
            'Trigger Discipline',
            'Unsightly',
        ],
    },

    init: function () {
        s = this.settings;
        c = this.charValues;
    },

    generateCharacter: function () {
        this.init();
        this.assignSpecialValues();
        this.assignClass();
        this.assignStartLocation();
        this.assignTraits();
        return c;
    },

    assignSpecialValues: function () {
        const specArray = [0,0,0,0,0,0,0];
        for (let i = 1; i <= s.specialPoints; i++) {
            ++specArray[Math.floor(Math.random() * 7)];
        }

        c.special.strength += specArray[0];
        c.special.perception += specArray[1];
        c.special.endurance += specArray[2];
        c.special.charisma += specArray[3];
        c.special.intelligence += specArray[4];
        c.special.agility += specArray[5];
        c.special.luck += specArray[6];
    },

    assignClass: function () {
       c.className = s.classList[Math.floor(Math.random() * s.classList.length)];
    },

    assignStartLocation: function () {
        c.startingLocation = s.locationList[Math.floor(Math.random() * s.locationList.length)];
    },

    assignTraits: function () {
        for (let i = 0; i < s.maxTraits; ++i) {
            c.traits[i] = s.traitList[Math.floor(Math.random() * s.traitList.length)];
        }
    },
};

var vm = new Vue({
    el: '#content',
    data: charGenerator.generateCharacter(),
});