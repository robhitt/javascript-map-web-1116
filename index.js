const app = "I don't do much."

const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

const transformedAutobots = map(autobots, function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

console.log(transformedAutobots);
/*
 Result:
 [
   { name: 'Optimus Prime', strength: 10, isTransformed: true },
   { name: 'Ironhide', strength: 6, isTransformed: true },
   { name: 'Bumblebee', strength: 5, isTransformed: true },
   { name: 'Ratchet', strength: 3, isTransformed: true }
 ]
*/
