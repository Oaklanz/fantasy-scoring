const utils = require('./utilities')
// import * as utils from './utilities'

const calculateScore = (player) => {

    var availablePositions = ['QB', 'RB', 'TE', 'WR'];
    var currentPosition = player.position;
    if (!availablePositions.includes(currentPosition)){
        return 0
    } 

    if (player.position === 'QB') {
        const {stats} = player;

        const passingYards = utils.calculatePassYards(stats.passing.yards) 
      
        const passingTouchdown = utils.calculatePassingTouchdown(stats.passing.touchdowns);
        
        const interception = utils.calculatePassingInterceptions(stats.passing.interceptions);
       
        const rushing = utils.calculateYardsRushing(stats.rushing.yards);
     
        const rushingTouchdown = utils.calculateRushingTouchdown(stats.rushing.touchdowns);
        
        
        const rushingFumbles = utils.calculateRushingFumble(stats.rushing.fumbles);

        const result = (passingYards + passingTouchdown + interception + rushing + rushingTouchdown + rushingFumbles)

        return result;
    }
    
    if (player.position === 'TE') {
        const {stats} = player;

        const reception = utils.calculateReceivingReception(stats.receiving.receptions)
        const yardsReceived = utils.calculateYardReceiving(stats.receiving.yards)
        const touchdown = utils.calculateReceivingTouchdown(stats.receiving.touchdowns)
        const fumble = utils.calculateReceivingFumble(stats.receiving.fumbles)


        const score = reception + yardsReceived + touchdown + fumble;

        return score;
    }

    if (player.position === 'WR'){
        const {stats} = player;

       const reception = utils.calculateReceivingReception(stats.receiving.receptions);
         
       const yardsReceived = utils.calculateYardReceiving(stats.receiving.yards);

       const touchdown = utils.calculateReceivingTouchdown(stats.receiving.touchdowns);

       const kickreturnYard = utils.calculateKickReturnyard(stats.kickreturn.yards)

       const fumble = utils.calculateKickReturnFumble(stats.kickreturn.fumbles)

       const returns = utils.calculatePuntReturnYards(stats.puntreturn.yards)

       const touchdowns = utils.calculatePuntReturnTouchdown(stats.puntreturn.touchdowns)

       const score = (reception + yardsReceived + touchdown   + kickreturnYard + fumble + returns + touchdowns)


       return score;

    }

    if (player.position === 'RB'){
        const {stats} = player;

        const rushingYards  = utils.calculateYardsRushing(stats.rushing.yards)

        const  touchdowns = utils.calculateRushingTouchdown(stats.rushing.touchdowns)

        const receptions = utils.calculateReceivingReception(stats.receiving.receptions)

        const receivingYards = utils.calculateYardReceiving(stats.receiving.yards)

       
        const result = (rushingYards + touchdowns + receptions + receivingYards) 

        return result;

    }
}
module.exports = calculateScore;

