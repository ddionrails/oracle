

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

// Datenmodell 3: Bewerten der Nutzereingaben mit SOEP-Vergleichswerten

{
    "income":{
        "calc":{
            "sex": 9.75,
            "height": 0.2,
            "coefficient": 120,
        },
        "plot":{
            "type": "line",
            "min": 20,
            "max": 100,
            "by": 20,
            "label": "age",
        },
        "text":{
            "title": "Wer verdient mehr?",
            "subTitle": "Ein Beispieltext passend zum Diagramm."
        },
    },
}