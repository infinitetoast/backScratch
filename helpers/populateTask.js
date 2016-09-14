const task = require('../models/task');

const tasks = [
  {
    address: '6501 General Diaz Street',
    taskName: 'Clean the neutral ground by my house',
    desc: `The city has neglected to clean the median by my house. 
    I want to go out there and rake some of the dead leaves, 
    but I'm going to need help moving all the leave bags across traffic. 
    Really any help cleaning at all would be appreciated.`,
    type: 'Physical Labor',
    difficulty: 2,
    deadlineDate: '2016-09-07T17:50:00.000Z',
    userID: 0,
  },
  {
    address: '3765 Lane Street',
    taskName: 'Need help driving to the grocery store',
    desc: `I recently broke my leg in an accident, so I can't drive myself around anymore. 
    I need someone to drive me to the gocery store down the street and help 
    me in and out of the store. Thanks so much!`,
    type: 'Errands',
    difficulty: 1,
    deadlineDate: '2016-11-11T01:22:00.000Z',
    userID: 0,
  },
  {
    address: '4091 Robert E. Lee, Apt #12',
    taskName: 'My computer crashed!!!',
    desc: `I'm not sure what happened! I was browsing online when it just suddently shut off 
    and won't turn back on. Any tech-savvy people please help! I'm not very good with computers, 
    and scared that all my stored photos of my grand-kids are gone!`,
    type: 'Handyman',
    difficulty: 3,
    deadlineDate: '2016-10-03T02:33:00.000Z',
    userID: 0,
  },
  {
    address: '9881 Onyx Blvd.',
    taskName: 'Does anyone know how to iron clothes?',
    desc: `I just finally moved out of my parents place, 
    and am having a hard time figuring out how to iron my own clothes. 
    I already accidentally caught one shirt on fire. I have a job interview next week, 
    so I need help ASAP!`,
    type: 'Domestic',
    difficulty: 1,
    deadlineDate: '2016-09-11T05:15:00.000Z',
    userID: 0,
  },
  {
    address: '5510 Iberville Street',
    taskName: 'Need another pair of eyes to read my screenplay',
    desc: `I just finished my magnum opus. 
    It is an enthralling movie screenplay about a killer lobster 
    that eats people on an isolated Maine island. 
    I need a fresh pair of eyes to look over my final draft for typos and mistakes. 
    It is over 400 pages long. You will not stab me in the back and sell my movie 
    idea after you have read it like the last guy.`,
    type: 'Informative',
    difficulty: 3,
    deadlineDate: '2016-09-29T02:22:00.000Z',
    userID: 0,
  },
  {
    address: '4221 Harrison Avenue',
    taskName: 'Try my brownies?',
    desc: `I recently started getting into baking. 
    I made some browines for my girlfriend and she said they were 
    the most disgusting thing she has has ever eaten. I think they are delicious! 
    One of us must be wrong. Please help us settle this argument before it causes 
    us to break up. PS If you allergic to nuts, you probably shouldn't eat them.`,
    type: 'Miscellaneous',
    difficulty: 1,
    deadlineDate: '2016-10-01T12:15:00.000Z',
    userID: 0,
  },
  {
    address: '8923 Bluejay Lane',
    taskName: 'My bathtub is clogged',
    desc: `Not really sure what happened, but my tub won't drain anymore. 
    I think I heard something fall down the drain while I was showering. 
    Hopefully it isn't anything too hard to get out. 
    I have no idea how to go about fixing it.`,
    type: 'Handyman',
    difficulty: 3,
    deadlineDate: '2016-09-22T01:23:00.000Z',
    userID: 0,
  },
  {
    address: '2398 Canal Blvd. Apt#10',
    taskName: 'Pick up a birthday cake',
    desc: `I'm currently hosting a kid's birthday party and am unable to 
    leave and grab it from the bakery. Can someone please go pick it up for me? 
    You can have a slice. It's chocolate!`,
    type: 'Errands',
    difficulty: 1,
    deadlineDate: '2016-10-09T11:02:00.000Z',
    userID: 0,
  },
  {
    address: '1034 Express Street',
    taskName: 'Domestic',
    desc: 'Clean up help after a big party',
    type: `Just threw a big bachelor party. 
    It got a little crazier than expected and now there's a huge mess at my house. 
    I need help cleaning up everything house before my fiancee gets home! 
    Please bring multiple vacuums.`,
    difficulty: 3,
    deadlineDate: '2016-09-15T01:00:00.000Z',
    userID: 0,
  },
  {
    address: ' 7462 Power Boulevard',
    taskName: 'Need cos-play sidekick',
    desc: `My friends and I are going to comic con as the Ninja Turtles, 
    but the guy who was dressing up as Donatello got sick. We have the costume and the tickets, 
    all we need is for you to hang out with us and take some pictures 
    during the course of the day.`,
    type: 'Miscellaneous',
    difficulty: 2,
    deadlineDate: '2016-09-21T03:33:00.000Z',
    userID: 0,
  },
  {
    address: '9843 Alba Ave.',
    taskName: 'Help me move',
    desc: `I just bought my own place, 
    but I don't know anyone in town yet who can help me move in. 
    I need someone with a pickup truck who can help me transport some boxes 
    and a mattress across town. I live on the second floor of my building so 
    it will be kind of hard to move stuff out.`,
    type: 'Physical Labor',
    difficulty: 2,
    deadlineDate: '2016-10-22T06:54:00.000Z',
    userID: 0,
  },
  {
    address: ' 2399 Avery Street',
    taskName: 'Teach me React-Native',
    desc: `I have a great idea for an app, but have no experience developing for mobile. 
    I need a tutor that can help guide me through the creation and delopyment process. 
    The app will serve as a hub for people to trade tasks and skills with each other. 
    There is lots of potential for scalability as well!`,
    type: 'Informative',
    difficulty: 3,
    deadlineDate: '2016-10-10T02:12:00.000Z',
    userID: 0,
  },
  {
    address: ' 8951 Martin Blvd.',
    taskName: 'My cat is stuck under my house!!!',
    desc: `Please help! I accidentally left my door open and my cat ran out. 
    She's hiding under the house and too scared to come out! 
    I'm worried that the racoons that live in the sewer are going 
    to try to eat her in the middle of the night. 
    I need someone skinny who can fit in the crawlspace below the house. 
    PS I do have a black widow spider infestation down there, bring gloves.`,
    type: 'Domestic',
    difficulty: 1,
    deadlineDate: '2016-09-24T08:12:00.000Z',
    userID: 0,
  },
  {
    address: ' 5489 Fleet Street',
    taskName: "Change my car's oil",
    desc: `Just got my first car. I want to learn how to change my own oil. 
    I know all these mechanic shops don't charge you properly and would rather do it myself. 
    I tried watching some tutorials on YouTube but I'm still confused. 
    I think I just need someone to walk me though it in person.`,
    type: 'Handyman',
    difficulty: 2,
    deadlineDate: '2016-11-11T09:44:00.000Z',
    userID: 0,
  },
  {
    address: ' 4781 Yonder Lane',
    taskName: 'Need help finishing my Mardi Gras float',
    desc: `I'm going to be walking in the Chewabacchus parade 
    for this upcoming Mardi Gras. I'm getting prepared ahead of time, 
    and am currently constructing a giant Death Star float. 
    I need someone to help me lay out the metal beams that will shape it into a sphere. 
    Should be a lot of fun to work on it.`,
    type: 'Physical Labor',
    difficulty: 3,
    deadlineDate: '2016-10-20T04:41:00.000Z',
    userID: 0,
  },
  {
    address: '3287 Typson Street',
    taskName: 'My car broke down',
    desc: "Car broke down on interstate, don't have AAA. Help!",
    type: 'Handyman',
    difficulty: 2,
    deadlineDate: '2016-11-15T02:22:00.000Z',
    userID: 0,
  },
  {
    address: '1381 Arlington Avenue',
    taskName: 'Need some advice',
    desc: `Just went through a messy breakup. 
    Someone please talk me through this.`,
    type: 'Informative',
    difficulty: 1,
    deadlineDate: '2016-11-15T07:11:00.000Z',
    userID: 0,
  },
  {
    address: '6412 Hidi Place',
    taskName: 'Have some old comics I want to get rid of',
    desc: `Found an old box of comics in my attic. 
    I'm not really into comics so you can just come by and pick them up.`,
    type: 'Miscellaneous',
    difficulty: 1,
    deadlineDate: '2016-12-12T03:34:00.000Z',
    userID: 0,
  },
  {
    address: '8923 Isotope Drive',
    taskName: 'Mow my lawn',
    desc: "It's too hot and I don't want to mow my lawn.",
    type: 'Physical Labor',
    difficulty: 3,
    deadlineDate: '2016-12-12T05:43:00.000Z',
    userID: 0,
  },
];

for (let i = 0; i < tasks.length; i++) {
  task.createTask(tasks[i]);
}
