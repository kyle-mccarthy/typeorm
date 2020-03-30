import { EntitySchema } from '../../../../src';
import { PostMedia } from './../model/PostMedia';
import { Post } from './PostEntity';
import { Media } from './MediaEntity';

export const PostMediaEntity = new EntitySchema<PostMedia>({
  name: 'post_media',
  target: PostMedia,
  columns: {
    mediaId: {
      type: Number,
      primary: true
    },
    postId: {
      type: Number,
      primary: true
    },
    order: {
      type: Number,
      nullable: true
    }
  },
  relations: {
    media: {
      target: 'media',
      type: 'many-to-one',
      joinColumn: true,
      eager: true,
      inverseSide: 'postMedia'
    },
    post: {
      target: 'post',
      type: 'many-to-one',
      joinColumn: true,
      inverseSide: 'media'
    }
  }
});

export interface IPostMedia {
  mediaId: number;
  postId: number;
  order?: number | null;
  post: Post;
  media: Media;
}
