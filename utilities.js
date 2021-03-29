

module.exports = {
   calculatePassYards: function (yards) {
  return yards / 25;
},
 calculatePassingTouchdown: function (td) {
  return 6 * td;
},
 calculatePassingInterceptions: function (num) {
  if (num > 0) {
    return num * -3;
  } else 
  return num;
},
 calculateRushingFumble: function (num) {
  if (num > 0){ return num * -3};
  return num;
},
 calculateYardsRushing: function (yards) {
  return (yards / 10);
},
 calculateRushingTouchdown: function (num) {
  return 6 * num;
},
 calculateReceivingReception: function (num) {
  return num;
},
 calculateYardReceiving: function(yard) {
  return (yard / 10);
},
 calculateReceivingTouchdown: function (num) {
  return num * 6;
},
 calculateReceivingFumble: function (num) {
  if (num > 0) return num * -3
  return num;
},
 calculateKickReturnyard: function (yard) {
  return (yards / 15);
},
 calculateKickReturnTouchdown: function (yard) {
  return yard * 6;
},
 calculateKickReturnFumble: function (num) {
  if (num > 0) return num * -3;
},
 calculatePuntReturnYards: function (yards) {
  return (yards / 15)
},
 calculatePuntReturnTouchdown: function (num) {
  return num * 6
},
 calculatePuntReturnFumble: function (num) {
  if (num > 0) return num * -3;
} 
}





