import { redirect } from 'react-router';

function setCookie(
  name: string,
  value: string,
  hours?: number,
  options?: { secure?: boolean; sameSite?: 'Lax' | 'Strict' | 'None' }
): void {
  let cookieStr = `${name}=${encodeURIComponent(value)}`;

  if (hours !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000); // hours → ms
    cookieStr += `; expires=${date.toUTCString()}`;
  }

  cookieStr += `; path=/`;

  if (options?.secure) cookieStr += `; Secure`;
  if (options?.sameSite) cookieStr += `; SameSite=${options.sameSite}`;

  document.cookie = cookieStr;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');

    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
export async function loginWithUser(userName: string, password: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userId = btoa(`${userName}${password}`);
      console.log('userId', userId);
      setCookie('authStateToken', userId, 1, {
        sameSite: 'Strict',
        secure: true,
      });
      resolve('Successs');
    }, 1500);
  });
}

export function validateAuthState() {
  const authToken = getCookie('authStateToken');
  if (!authToken) {
    return redirect('/login');
  }
}
