export enum RoomId {
    ENTRANCE,
    TESTROOM1
}

export interface Command {
    command: string,
    handler: any
}

export interface RoomInfo {
    id: RoomId,
    entryText: string,
    commands: Command[]
}

export interface PlayerInfo {
    wallet: string,
    currentRoom: RoomId,
    counter: number,
    inventory: InventoryItem[]
}

export enum ItemId {
    NASTY_KNIFE
}

export interface ItemInfo {
    id: ItemId,
    name: string,
    description: string,
    shortname: string
}

export interface InventoryItem {
    item: ItemInfo,
    quantity: number
}

export const defaultPlayer: PlayerInfo = {
    wallet: '',
    currentRoom: RoomId.ENTRANCE,
    inventory: [ ],
    counter: 0
}

export interface EngineCallbacks {
    roomChange: any,
    addItem: any
}

export interface CommandProps {
    engineCallbacks: EngineCallbacks,
    input: string
}