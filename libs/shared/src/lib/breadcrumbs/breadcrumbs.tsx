import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { default as NextLink } from 'next/link';

interface ICrumb {
  title: string;
  href: string;
  last: boolean;
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function ActiveLastBreadcrumb() {
  const router = useRouter();
  function generateBreadcrumbs() {
    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = router.asPath.split('?')[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split('/')
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      // The title will just be the route string for now
      const title = subpath;
      return { href, title };
    });

    // Add in a default "Home" crumb for the top-level
    return [{ href: '/', title: 'Home' }, ...crumblist];
  }

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div role="presentation">
      <Breadcrumbs
        style={{ marginBottom: '20px' }}
        separator="›"
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((crumb, idx) => (
          <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
        ))}
      </Breadcrumbs>
    </div>
  );
}

// Each individual "crumb" in the breadcrumbs list
function Crumb({ title, href, last = false }: ICrumb) {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <Typography color="text.primary">{title}</Typography>;
  }

  // All other crumbs will be rendered as links that can be visited
  return <NextLink href={href}>{title}</NextLink>;
}
