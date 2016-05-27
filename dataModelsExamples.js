

// Datenmodell 1: Online-Befragung generieren
{
    "sex":{
        "type":"binary",
        "values":{
          0: "Männlich",
          1: "Weiblich"
        },
        "text": "Sind Sie männlich oder weiblich?",
        "coefficient": 1,
    },
    "height":{
        "type":"numeric",
        "min":0,
        "max":220,
        "text":"Wie groß sind Sie?",
        "coefficient": 1,
    },
    "favoriteLetter":{
        "id":"letter",
        "type":"multiple",
        "value":{
            1: "a",
            2: "b",
            3: "c",
        },
        "text":"Was sind Ihre Lieblingsbuchstaben?",
    },
};

// Datenmodell 2: Nutzereingaben lesen und organisieren

{
    "sex": 0,
    "height": 178,
    "favoriteLetter": [b, c],
};

// Datenmodell 3: Parameter zum Vergleich der Nutzereingaben mit den SOEP-Vergleichswerten

{
    "income":{
		"sex": 9.75,
		"height": 0.2,
		"coefficient": 120,  
    },
	"socialNetworks": {
		
	}
}

// Datenmodell 4: Auswertungsergebnisse

{
	"income": [1400, 2000, 2200, 2570, 2200],
	"socialNetworks": [12,123,321,214,100],
}


// Datenmodell 5: Diagrammbeschreibung

{
	"income":{
		"plot": "line",
		"by": {
            "min": 20,
            "max": 100,
            "steps": 20,
        },
		"axisLabel":{
			"x": "Alter",
			"y": "Einkommen",
		}
        "text":{
            "title": "Wie viel wirst du in 10 Jahren? verdienen",
            "subTitle": "Ein Beispieltext passend zum Diagramm."
        },
	},
	"socialNetworks":{
		"plot": "bars",
		"axisLabel": {
			"x" : "",
			"y" "Nutzung sozialer Netzwerke",
		}
		"dataLabels": ["Täglich", "Mindestens 1 mal pro Woche", "Mindestens 1 mal pro Monat", "Seltener", "Nie"],
		"text":{
            "title": "Wie oft nutzen wir Facebook und Co?",
            "subTitle": "Ein Beispieltext passend zum Diagramm."
        },
}