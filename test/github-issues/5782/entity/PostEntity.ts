import { EntitySchema } from '../../../../src';
import { PostMedia } from '../model/PostMedia';
// import { IPostMedia } from './PostMediaEntity';

export const PostEntity = new EntitySchema<Post>({
  name: 'post',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  relations: {
    media: {
      type: 'one-to-many',
      target: 'post_media',
      inverseSide: 'post'
    }
  }
});

export interface Post {
  id: number;
  title: string;
  text: string;
  media?: PostMedia;

  // media?: IPostMedia;
}

