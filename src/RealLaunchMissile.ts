import {Missile, RealLaunchMissileSystem} from "./Types";

export class LaunchMissileImpl implements RealLaunchMissileSystem {
    missile: Missile
    password: string

    constructor(missile: Missile, password: string) {
        this.missile = missile
        this.password = password
    }

    async launch() {
        if (this.password === "showhei39") {
            return await this.missile.fire()
        } else {
            return this.missile.selfDestruction()
        }
    }

}