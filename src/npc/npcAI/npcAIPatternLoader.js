import npcAIPattern from '../npcData/npcAIPattern';

export default function npcAIPatternLoader(obj) {
    const timeEvents = obj.npcAI.timeTriggered;
    const hpEvents = obj.npcAI.hpTriggered;

    if (timeEvents.length > 0
        && obj.elapsedTime >= timeEvents[0].triggerTime) {

        const timePatternName = timeEvents[0].aiPattern;
        if (npcAIPattern[timePatternName]) {
            obj.aiPattern = npcAIPattern[timePatternName];
        } else {
            console.error(`AI pattern "${timePatternName}" not found (time trigger)`);
        }
        obj.aiPatternTime = 0;
        obj.aiPatternCurrentStep = -1;
        timeEvents.shift();
    }
    if (hpEvents.length > 0
        && obj.hp <= hpEvents[0].triggerHP) {

        const hpPatternName = hpEvents[0].aiPattern;
        if (npcAIPattern[hpPatternName]) {
            obj.aiPattern = npcAIPattern[hpPatternName];
        } else {
            console.error(`AI pattern "${hpPatternName}" not found (HP trigger)`);
        }
        obj.aiPatternTime = 0;
        obj.aiPatternCurrentStep = -1;
        hpEvents.shift();
    }
}