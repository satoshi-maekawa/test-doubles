import { LaunchMissileSystem, Weather, WeatherRepository } from './Types'


export class LaunchMissileImpl implements LaunchMissileSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(): Promise<string> {
        const weather = await this.weatherRepository.getByCity('Nagoya')
        console.log(weather)
        // テストが通るように書き換えてください
        if (weather === Weather.SUNNY) {
            return Promise.resolve('ミサイルを発射しました')
        } return Promise.resolve('自爆しました')
    }
}