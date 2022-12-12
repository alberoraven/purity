import { Injectable } from '@angular/core';
import { PureCache } from '../pure-cache/pure-cache';
import { ISchedule } from './schedule.modal';
import { of } from 'rxjs';
import { GraphqlService } from "../api/api.service";
import { gql } from 'apollo-angular';
import { nhost } from '../../providers/global';

@Injectable()
export class ScheduleProvider {
  public scheduleCache = new PureCache();
  public graphqlService = new GraphqlService();
  constructor() { }

  /**
    * Set schedule from cache
    * @param data service list
    */
  private _setCacheSchedule(type: string, data: any): void {
    this.scheduleCache.save(`schedule_${type}`, data);
  }

  /**
   * Get schedule from cache
   * @return ISchedule[] schedule list
   */
  private _getCacheSchedule(type: string): void {
    return this.scheduleCache.get(`schedule_${type}`);
  }

  getSchedule(c_name: string) {
    const data = this._getCacheSchedule(c_name);
    return of<any>(data);
  }

  async executeQuery(query: any, params?: any) {
    try {
      const requestQuery = gql`${query}`;
      const { data, error } = await nhost.graphql.request(requestQuery);
      if (data) {
        this._setCacheSchedule(params , { ...data })
        return data
      }
      else{
        return error
      }
    } catch (error) {
      console.log(params ,error);
    }
  }

}
