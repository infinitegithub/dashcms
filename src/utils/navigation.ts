export function getActiveRoute(pathname: string): string {
  return pathname.split('/')[1] || '';
}

export function isActiveRoute(currentPath: string, routePath: string): boolean {
  return currentPath === routePath;
}