import 'reflect-metadata';
import {
  closeTestingConnections,
  createTestingConnections,
  reloadTestingDatabases
} from '../../utils/test-utils';
import { Connection } from '../../../src';
import { PostEntity } from './entity/PostEntity';
import { MediaEntity } from './entity/MediaEntity';
import { PostMediaEntity } from './entity/PostMediaEntity';
import { expect } from 'chai';

describe('github issues > #es', () => {
  let connections: Connection[];
  before(
    async () =>
      (connections = await createTestingConnections({
        entities: [PostMediaEntity, PostEntity, MediaEntity]
      }))
  );
  beforeEach(() => reloadTestingDatabases(connections));
  after(() => closeTestingConnections(connections));

  it('it should run', () => {
    Promise.all(
      connections.map(async connection => {
        const repo = connection.getRepository(PostEntity);
        await repo.findOne(1);
        expect(true === true);
      })
    );
  });
});
