import { EntitySchema } from '../../../../src';
import { PostMedia } from './../model/PostMedia';

export const MediaEntity = new EntitySchema<Media>({
  name: 'media',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    source: {
      type: String
    }
  },
  relations: {
    postMedia: {
      type: 'one-to-many',
      target: 'post_media',
      inverseSide: 'media'
    }
  }
});

export interface Media {
  id: number;
  source: string;
  postMedia?: PostMedia;
}
