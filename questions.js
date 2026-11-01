// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

// questions for rounds
var questions_rounds = [
    'When ordering a matcha tea, what one flavor is the best pairing?',
    'Name an Ariana Grande song',
    'In anime, what is a common protagonist hair color?',
    'What is the best breed of dog to own?',
]

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
    [
        ['Strawberry', 32],
        ['Vanilla', 22],
        ['Mango', 15],
        ['Lavendar', 11],
        ['Coconut', 8],
        ['Peach', 6],
        ['Brown Sugar', 4]
    ], [
        ['7 Rings', 28],
        ['Thank U, Next', 22],
        ['Problem', 15],
        ['Positions', 12],
        ['Bang Bang', 9],
        ['Side to Side', 6],
        ['34+35', 5]
    ], [
        ['Black', 27],
        ['Blonde', 18],
        ['Brown', 12],
        ['Silver/Gray/White', 10],
        ['Light Brown/Orange', 9],
        ['Red', 8],
        ['Blue', 6]
    ], [
        ['Golden Retriever', 33],
        ['Border Collies', 25],
        ['Great Danes', 17],
        ['Samoyed', 13],
        ['Labradors', 11],
        ['German Shepherds', 9],
        ['Australian Shepherds', 8]
    ]
]


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 2, 3, 3]


// questions for finals
var questions_finals = [
    "Name something kids would be disappointed to get while trick-or-treating",
    'Name something pumpkin flavored',
    'Name a costume that children will never stop wearing for Halloween',
    'Name a sound that would create a spooky atmosphere',
    'Name something a vampire is supposed to be afraid of',
]


// answers to the questions for the finals	
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
    [
        ['Raisins', 36],
        ['A toothbrush', 22],
        ['Fruit', 17],
        ['Coins', 14],
        ['Licorice', 11],
    ], [
        ['Pie', 33],
        ['Coffee/Latte', 24],
        ['Bread', 18],
        ['Cookies', 14],
        ['Soup', 11]
    ], [
        ['Superhero', 34],
        ['Princess', 23],
        ['Witch', 17],
        ['Pirate', 14],
        ['Dinosaur', 12],
    ], [
        ['A scream', 36],
        ['A wolf howling', 22],
        ['A creaking door', 17],
        ['Thunder', 14],
        ['An evil laugh', 11],
    ], [
        ['Sunlight', 33],
        ['Garlic', 24],
        ['A wooden stake', 18],
        ['A cross', 14],
        ['Holy water', 11],
    ]
]


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];

