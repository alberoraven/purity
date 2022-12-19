import { gql } from 'apollo-angular';
import { nhost } from '../../providers/global';

export class GraphqlService {

  constructor() { }

  async executeQuery(query: any) {
    const requestQuery = gql`${query}`;
    const { data, error } = await nhost.graphql.request(requestQuery);
    console.log(data);
    
    if (data) return { ...data }; else error;
  }

}
