export class Model {
    static from<T extends Model>(this: new () => T, data: Partial<T>): T{
        const instance = new this()
        Object.assign(instance, data)
        return instance
    }
}