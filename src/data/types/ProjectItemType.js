import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ProjectItemType = new ObjectType({
  name: 'ProjectItem',
  fields: {
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    date: { type: new NonNull(StringType) },
    descript: { type: StringType },
    content: { type: ObjectType },
  },
});

export default ProjectItemType;
