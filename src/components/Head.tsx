import Head from "next/head";

export type MetaData = {
  title?: string;
  description?: string;
  pagePath?: string;
  image?: string;
};

const defaultData = {
  url: "",
  title: "",
  description: "",
};

export const CustomHead = (props: MetaData) => {
  const title = props.title
    ? `${props.title} | ${defaultData.title}`
    : defaultData.title;
  const description = props.description ?? defaultData.description;
  const url = props.pagePath ?? defaultData.url;
  //   const imgUrl = props.image ? `https://tensakukun.vercel.com` : defaultImg;

  return (
    <Head>
      {/* title */}
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link rel="canonical" href={url} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://englister.yunomy.com/" />
      {/* <meta property="og:image" content={imgUrl} /> */}
      <meta property="og:site_name" content={title} />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yuno_miyako2" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={imgUrl} /> */}

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>📝</text></svg>"
      />
    </Head>
  );
};
