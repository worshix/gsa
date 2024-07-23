import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Link from "next/link";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  const date = page.data.publishing_time;

  //return <SliceZone slices={page.data.slices} components={components} />;
  return (
	<section className="article">
    <article className="articles-socials flex gap-2 text-white p-2 text-xs">
      <Link href="https://twitter.com/Preservefutures"className="flex ml-auto rounded-md bg-gray-700">
        <span className="mr-1 block p-2">Twitter</span>
        <span className="bi-twitter-x twitter-x block p-2 rounded-r-md"></span>
      </Link>
      <Link href="https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/" className="flex linkedin rounded-md">
        <span className="mr-1 block p-2">LinkedIn</span>
        <span className="bi-linkedin block p-2 bg-[#24a3e2] rounded-r-md"></span>
      </Link>
    </article>
    <div className="w-[50vw] h-[320px] overflow-hidden mx-auto my-2">
     <PrismicNextImage field={page.data.story_image} className="transition-transform duration-300 hover:scale-110 ease-linear"/>
    </div>
    <article className="flex justify-center flex-col p-2 gap-2">
      <h1 className="text-bold text-main-500 text-lg font-bold">{page.data.title}</h1>
      <p className="font-light text-slate-500 text-sm"><span className="font-bold">Published on:</span> <time>{date}</time></p>
    </article>
    <article className="article-body">
		  <PrismicRichText field={page.data.story} />
    </article>
	</section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("article");
  return pages.map((page) => {
    return { uid: page.uid };
  });
}

