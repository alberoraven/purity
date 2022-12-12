import { Injectable } from '@angular/core';
import { PureCache } from '../pure-cache/pure-cache';
import { IService } from './service.modal';
import { of } from 'rxjs';
import { GraphqlService } from "../api/api.service";

@Injectable()
export class SevicesProvider {
  public serviceCache = new PureCache();
  public graphqlService = new GraphqlService();
  constructor() { }

  /**
    * Set service from cache
    * @param data service list
    */
  private _setCacheServices(data: IService[]): void {
    this.serviceCache.save(`services`, data);
  }

  /**
   * Get service from cache
   * @return IService[] service list
   */
  private _getCacheServices(): IService[] {
    return this.serviceCache.get(`services`);
  }

  async serviceListGraphql() {
    try {
      const services = `service_details {
                            sid,
                            name,
                            description,
                            duration,
                            is_active,
                            price,
                            ratings,
                            reviews_count,
                            share_amount
                        }`
        const servicesList = await this.graphqlService.executeQuery(services);
        this._setCacheServices(servicesList?.service_details);
        return servicesList?.service_details;
    } catch (error) {
        console.log("service call error:" + error);
    }
  }

  getserviceList() {
    const service = this._getCacheServices();
    return of<IService[]>(service)
  }

}
