/* eslint-disable no-underscore-dangle */
import React from 'react'
import styled from 'styled-components'

const _tags = {
  webpack: {
    bg: '#8ED5FA',
    color: '#1C78C0',
  },
  python: {
    bg: '#FFD43B',
    color: '#306998',
  },
  javascript: {
    bg: '#f0db4f',
    color: '#323330',
  },
  typescript: {
    bg: '#007acc',
    color: '#ffffff',
  },
  react: {
    bg: '#20232a',
    color: '#61dafb',
  },
  gatsby: {
    bg: '#663399',
    color: '#ffffff',
  },
}

type Tags = keyof typeof _tags

interface TagProps {
  bg: string
  color: string
}

const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;

  background: ${(props): string => props.bg};
  color: ${(props): string => props.color};

  border-radius: 4px;

  &:hover {
    filter: brightness(0.9);
  }
`

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

interface PostTags {
  tags: Tags[]
}

const PostTags: React.FC<PostTags> = ({ tags }) => {
  return (
    <TagContainer>
      {tags.map(tag => (
        <Tag bg={_tags[tag].bg} color={_tags[tag].color}>
          {tag}
        </Tag>
      ))}
    </TagContainer>
  )
}

export default PostTags
