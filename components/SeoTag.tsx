export const SeoTag = ({
  description,
  pageUrl,
  ogTitle,
  ogSiteName,
  ogDescription,
  ogType,
  ogImage
}) => (
  <>
    <meta name="description" content={description || "東大出身者が教える小中学生向け本格的プログラミング学習サービス「Schole（スコレ）」"} />
    <meta property="og:url" content={pageUrl || "https://campaign.schole.app/python-course"} />
    <meta property="og:title" content={ogTitle || "Schole（スコレ）| 本格的プログラミング学習"} />
    <meta property="og:site_name" content={ogSiteName || "Schole（スコレ）| 本格的プログラミング学習"} />
    <meta property="og:description" content={ogDescription || "東大出身者が教える小中学生向け本格的プログラミング学習サービス「Schole（スコレ）」。" } />
    <meta property="og:type" content={ogType} />
    <meta property="og:image" content={ogImage || "https://campaign.schole.app/python-course"} />
  </>
)