import * as THREE from "three";
import { Line2 } from "three/addons/lines/Line2.js";

// ── Primitive unions ──────────────────────────────────────────────────────────

export type GameState =
    | "titleScreen" | "changeShip" | "settings" | "instructions"
    | "intro" | "startingGame" | "playing" | "missionComplete"
    | "gameOver" | "pause" | "initiateGame";

export type BlasterColor = "blue" | "green" | "orange" | "violet" | "bubbleGum" | "red";
export type BlasterShape = "sphere" | "capsule";
export type NPCType = "npcShip" | "npcHeavy" | "asteroid";
export type UpDownKey = "inverted" | "unInverted";
export type FireTarget = "none" | "pc" | "front";
export type RollState = false | "rightRoll" | "leftRoll";

// ── Input ─────────────────────────────────────────────────────────────────────

export interface KeyStates {
    right: boolean;
    left: boolean;
    up: boolean;
    down: boolean;
    rightRoll: boolean;
    leftRoll: boolean;
    boost: boolean;
    blaster: boolean;
    enter: boolean;
    esc: boolean;
    upDownKey: UpDownKey;
    pressed: boolean;
}

// ── PC ship static data ───────────────────────────────────────────────────────

export interface PCBlasterConfig {
    soundSrc: string;
    speed: number;
    power: number;
    shape: BlasterShape;
    color: BlasterColor;
    size: number;
}

export interface PCShipStats {
    collisionSize: number;
    blasterDelay: number;
    maxSpeed: [number, number, number];
    speedAccel: [number, number, number];
    speedDecel: [number, number, number];
    rollDelay: number;
    rollCost: number;
    boostCost: number;
    hpMax: number;
    hp: number;
    hpDisplayed: number;
    energyMax: number;
    energy: number;
    energyDisplayed: number;
    energyDelay: number;
    energyRecharge: number;
}

export interface PCShipConfig {
    name: string;
    src: string;
    desc: string;
    data: PCShipStats;
    blaster: PCBlasterConfig;
}

// ── NPC static data ───────────────────────────────────────────────────────────

export interface NPCShipBasic {
    npcGlb: string;
    type: "npcShip" | "npcHeavy";
    collisionSize: number;
    hp: number;
    power: number;
    maxSpeed: number;
    speedAccel: [number, number, number];
    speedDecel: [number, number, number];
    speed: [number, number, number];
    defaultSpeed: [number, number, number];
    targetPosition: number[];
    targetRotation: [number, number, number];
    blasterColor: BlasterColor;
    blasterShape: BlasterShape;
    blasterRadius: number;
    blasterLength: number;
    blasterSpeed: number;
    blasterPower: number;
    blasterSoundSrc: string;
    unpassable?: boolean;
}

export interface NPCAsteroidBasic {
    npcGlb: string;
    type: "asteroid";
    collisionSize: number;
    hp: number;
    power: number;
    defaultSpeed: [number, number, number];
    rotatingSpeed: [number, number, number];
}

export type NPCBasicConfig = NPCShipBasic | NPCAsteroidBasic;

// ── NPC AI data ───────────────────────────────────────────────────────────────

export interface AITimeTrigger {
    triggerTime: number;
    aiPattern: string;
}

export interface AIHPTrigger {
    triggerHP: number;
    aiPattern: string;
}

export interface NPCAIConfig {
    timeTriggered: AITimeTrigger[];
    hpTriggered: AIHPTrigger[];
}

export type AIAction =
    | "move" | "moveTo" | "randomMoveTo" | "blaster"
    | "setPatternTime" | "setDefaultSpeed" | "setRotation";

export interface AIPatternStep {
    actionTime: number;
    action: AIAction;
    value: number[] | string | number;
}

export type AIPattern = AIPatternStep[];

// ── Level data ────────────────────────────────────────────────────────────────

export interface LevelEvent {
    eventTime: number;
    npcAIname: string;
    npcBasic: string;
    startingPosition: "random" | [number, number, number];
}

// ── Background data ───────────────────────────────────────────────────────────

export interface BackgroundConfig {
    size: [number, number];
    position: [number, number, number];
    rotationY: number;
    speed: number;
}

export type BackgroundEntry = [string, BackgroundConfig];

export interface BackgroundObject extends THREE.Mesh {
    speed: number;
}

// ── Collision utilities ───────────────────────────────────────────────────────

export interface Collidable extends THREE.Object3D {
    collisionSize: number;
}

export interface Hittable extends THREE.Object3D {
    hitMark: number;
}

// ── Runtime scene ─────────────────────────────────────────────────────────────

export interface GameScene extends THREE.Scene {
    gameState: GameState;
    shipNumber: number;
    backgroundObjs: BackgroundObject[];
    levelArr: LevelEvent[];
    timeStamp: number;
    boostSpeed: number;
    boostalbe: boolean;
}

// ── Runtime player ship ───────────────────────────────────────────────────────

export interface PCShip extends THREE.Group {
    shipNumber: number;
    collisionSize: number;
    blasterDelay: number;
    blasterCoolTime: number;
    maxSpeed: [number, number, number];
    speedAccel: [number, number, number];
    speedDecel: [number, number, number];
    speed: [number, number, number];
    rollDelay: number;
    rollCoolTime: number;
    rollCost: number;
    boostCost: number;
    hpMax: number;
    hp: number;
    hpDisplayed: number;
    energyMax: number;
    energy: number;
    energyDisplayed: number;
    energyDelay: number;
    energyCoolTime: number;
    energyRecharge: number;
    rolling: RollState;
    autoTarget: NPCObject | null;
    targetMarker: Line2;
}

// ── Runtime NPC ───────────────────────────────────────────────────────────────

export interface NPCObject extends THREE.Group {
    npcGlb: string;
    type: NPCType;
    collisionSize: number;
    hp: number;
    power: number;
    maxSpeed?: number;
    speedAccel?: [number, number, number];
    speedDecel?: [number, number, number];
    speed?: [number, number, number];
    defaultSpeed: [number, number, number];
    targetPosition: number[];
    targetRotation: [number, number, number];
    blasterColor?: BlasterColor;
    blasterShape?: BlasterShape;
    blasterRadius?: number;
    blasterLength?: number;
    blasterSpeed?: number;
    blasterPower?: number;
    blasterSoundSrc?: string;
    unpassable?: boolean;
    rotatingSpeed?: [number, number, number];
    // Runtime AI state
    npcAI: NPCAIConfig;
    elapsedTime: number;
    aiPatternTime: number;
    aiPatternCurrentStep: number;
    fireBlaster: FireTarget;
    hitMark: number;
    aiPattern?: AIPattern;
}

// ── Projectiles ───────────────────────────────────────────────────────────────

export interface PCBlaster extends THREE.Mesh {
    speed: [number, number, number];
    power: number;
    collisionSize: number;
}

export interface NPCBlaster extends THREE.Mesh {
    speed: number;
    power: number;
    collisionSize: number;
}

// ── Container types ───────────────────────────────────────────────────────────

export interface PCObjects {
    pcShip: PCShip;
    pcBlasters: PCBlaster[];
}

export interface NPCObjects {
    npcs: NPCObject[];
    npcBlasters: NPCBlaster[];
}

export interface Velocity3D {
    x: number;
    y: number;
    z: number;
}

export interface ExplosionObjects {
    sprites: THREE.Sprite[];
    materials: THREE.SpriteMaterial[];
    velocities: Velocity3D[];
    lifetimes: number[];
    rotations: number[];
}
