import { Anchor, Breadcrumbs, Text } from "@mantine/core";
import { Link, useMatches } from "react-router-dom";
import type { ReactNode } from "react";

type BreadcrumbMatch = ReturnType<typeof useMatches>[number];

type BreadcrumbValue =
  | ReactNode
  | ((match: BreadcrumbMatch, matches: BreadcrumbMatch[]) => ReactNode);

type MatchWithHandle = BreadcrumbMatch & {
  handle?: {
    breadcrumb?: BreadcrumbValue;
  };
};

const resolveBreadcrumb = (
  match: MatchWithHandle,
  matches: MatchWithHandle[]
): ReactNode | null => {
  const { breadcrumb } = match.handle ?? {};

  if (!breadcrumb) {
    return null;
  }

  if (typeof breadcrumb === "function") {
    return breadcrumb(match, matches);
  }

  return breadcrumb;
};

const AppBreadcrumbs = () => {
  const matches = useMatches() as MatchWithHandle[];

  const items = matches
    .map((match) => resolveBreadcrumb(match, matches))
    .map((label, index) => {
      if (!label) {
        return null;
      }

      const match = matches[index];
      const isLast = index === matches.length - 1;
      const key = match.pathname ?? index;

      if (isLast) {
        return typeof label === "string" ? (
          <Text key={key} fw={500}>
            {label}
          </Text>
        ) : (
          <span key={key}>{label}</span>
        );
      }

      return (
        <Anchor component={Link} to={match.pathname ?? ""} key={key} c="dimmed">
          {label}
        </Anchor>
      );
    })
    .filter(Boolean) as ReactNode[];

  if (items.length < 2) {
    return null;
  }

  return (
    <Breadcrumbs mt="md" mb="md" mr="md" ml="md">
      {items}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;

