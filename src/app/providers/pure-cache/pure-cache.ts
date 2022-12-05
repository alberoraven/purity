import { ICachedData } from './cache.model';
import { cloneDeep, sortBy } from 'lodash';

export class PureCache {

    private _cache: ICachedData[] = [];

    protected now(): number {
        return Math.floor(Date.now() / 1000);
    }

    public clearAll() {
        this._cache = [];
    }

    private _find(name: string): ICachedData {
        if (!this._cache.length) {
            return;
        }
        let index = this._cache.map(c => c.name).indexOf(name);
        if (index !== -1) {
            return this._cache[index];
        }
    }

    public parametrize(name: string, params: any) {
        if (params && (params instanceof Object)) {
            return sortBy(Object.keys(params)).reduce((p, c) => `${p}_${params[c]}`, name);
        }
        return name;
    }

    public get(name: string) {
        let find = this._find(name);
        if (find) {
            return cloneDeep(find.data);
        }
    }

    public exists(name: string): boolean {
        let exists = false;
        this._cache.forEach(c => {
            if (c.name === name) {
                exists = true;
                return false;
            }
        });
        return exists;
    }

    public save(name: string, data: any) {
        if (data === null) {
            this.clear(name);
            return;
        }
        let cached = <ICachedData>{
            name,
            data,
            savedAt: this.now()
        };
        this.clear(name);
        this._cache.push(cached);
        return cloneDeep(data);
    }

    public clear(name: string): boolean {
        let index = this._cache.map(c => c.name).indexOf(name);
        if (index !== -1) {
            this._cache.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Deletes from cache
     * items with key matching
     * name as string search
     * (case sensitive)
     * @param name [string]
     */
    public clearPrefix(name: string): boolean {
        let keys = () => this._cache.map(c => c.name);
        let finds = keys().filter(n => n.search(name) !== -1);
        if (!finds.length) {
            return false;
        }
        finds.forEach(f => {
            let inCache = keys().indexOf(f);
            if (inCache !== -1) {
                this._cache.splice(inCache, 1);
            }
        });
        return true;
    }
}
