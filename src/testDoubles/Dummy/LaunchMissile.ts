import {LaunchMissileSystem, Missile} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    password: string

    constructor(missile: Missile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        //TODO ②テストが通るように実装を変更してください
    }
}