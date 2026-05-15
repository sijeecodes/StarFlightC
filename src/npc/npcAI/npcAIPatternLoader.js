import npcAIPattern from '../npcData/npcAIPattern';

export default function npcAIPatternLoader(obj) {
    const timeEvents = obj.npcAI.timeTriggered;
    const hpEvents = obj.npcAI.hpTriggered;

    if (timeEvents.length > 0
        && obj.elapsedTime >= timeEvents[0].triggerTime) {

        obj.aiPattern = npcAIPattern[timeEvents[0].aiPattern];
        obj.aiPatternTime = 0;
        obj.aiPatternCurrentStep = -1;
        timeEvents.shift();
    }
    if (hpEvents.length > 0
        && obj.hp <= hpEvents[0].triggerHP) {

        obj.aiPattern = npcAIPattern[hpEvents[0].aiPattern];
        obj.aiPatternTime = 0;
        obj.aiPatternCurrentStep = -1;
        hpEvents.shift();
    }
}