import dynamic from 'next/dynamic'
import React from 'react'

const Giscus = dynamic(() => import('@giscus/react').then((mod) => mod.Giscus), { ssr: false })

export default function GiscusComments() {
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

  if (!repo || !repoId || !category || !categoryId) return null

  return (
    <div className="mt-8">
      <Giscus
        repo={repo as `${string}/${string}`}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
      />
    </div>
  )
}
