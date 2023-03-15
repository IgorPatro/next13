import React from "react"

interface Props {
  params: {
    slug: string
  }
}

const BlogPage = ({ params }: Props) => {
  return <div>{params.slug}</div>
}

export default BlogPage
