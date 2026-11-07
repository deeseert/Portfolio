import { asset } from "@/lib/asset";

export type SiteImage = {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
};

function responsive(name: string, small: number, large: number, height: number): SiteImage {
  return {
    src: asset(`/img/${name}-${large}.webp`),
    srcSet: `${asset(`/img/${name}-${small}.webp`)} ${small}w, ${asset(`/img/${name}-${large}.webp`)} ${large}w`,
    width: large,
    height,
  };
}

export const images = {
  devhubHome: responsive("devhub-home", 900, 1600, 1063),
  devhubDashboard: responsive("devhub-dashboard", 900, 1600, 964),
  devhubCode: responsive("devhub-code", 640, 1028, 1345),
  reachBrands: responsive("reach-brands", 760, 1500, 1221),
  okBeauty: responsive("ok-beauty", 760, 1280, 856),
  atomInvest: { src: asset("/img/atominvest-900.webp"), width: 900, height: 602 },
  jolie: { src: asset("/img/jolie-640.webp"), width: 640, height: 427 },
  lawyered: { src: asset("/img/lawyered-640.webp"), width: 640, height: 428 },
  portrait: { src: asset("/img/portrait.jpg"), width: 250, height: 250 },
} satisfies Record<string, SiteImage>;
