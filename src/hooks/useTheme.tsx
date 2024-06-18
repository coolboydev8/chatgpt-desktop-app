import { useState, useEffect } from 'react';
import { getCurrent } from '@tauri-apps/api/window';

export default function useTheme() {
  const [theme, setTheme] = useState<string | null>('light'); // ['light', 'dark']

  useEffect(() => {
    let unlisten: Function;
    (async () => {
      setTheme(await getCurrent().theme() || '');
      unlisten = await getCurrent().onThemeChanged(({ payload: newTheme }) => {
        setTheme(newTheme);
      });
    })()

    return () => {
      unlisten?.();
    };
  }, [])

  return theme;
}