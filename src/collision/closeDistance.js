export default function closeDistance(pcBlaster, npc) {
    if (pcBlaster.position.distanceTo(npc.position)
        <= pcBlaster.collisionSize + npc.collisionSize) {

        return true;
    }
    return false;
}