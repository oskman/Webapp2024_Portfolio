export function getRoleFromCookies() {
    const match = document.cookie.match(/user.role=([^;]+)/);
    return match ? match[1] : null;
  }