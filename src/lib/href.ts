/** Only absolute http(s) URLs leave the site; in-page anchors and mailto: stay in the tab. */
export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

type ExternalLinkProps = {
  target?: "_blank";
  rel?: "noreferrer noopener";
};

/**
 * Target and rel are returned together so a link can never be given a new
 * browsing context without the rel that blocks opener access and referrer leak.
 */
export function externalLinkProps(href: string): ExternalLinkProps {
  return isExternalHref(href) ? { target: "_blank", rel: "noreferrer noopener" } : {};
}
