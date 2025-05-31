type ValidStorageKey = "workoutPlan" | string;

type StorageValue = string | object | null;

const isBrowser = typeof window !== "undefined";

const KEY_PREFIX = "gymweb:";

const withPrefix = (key: ValidStorageKey) => `${KEY_PREFIX}${key}`;

const localStorageManager = {
  create: (key: ValidStorageKey, value: StorageValue) => {
    if (!isBrowser) return;
    const stringValue =
      typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(withPrefix(key), stringValue as string);
  },

  read: <T = unknown>(key: ValidStorageKey): T | null => {
    if (!isBrowser) return null;
    const value = localStorage.getItem(withPrefix(key));
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return value as unknown as T;
    }
  },

  update: (key: ValidStorageKey, value: StorageValue) => {
    if (!isBrowser) return;
    const storageKey = withPrefix(key);
    const exists = localStorage.getItem(storageKey);
    if (exists !== null) {
      localStorageManager.create(key, value);
    } else {
      console.warn(`Key "${key}" does not exist. Use 'create' instead.`);
    }
  },

  delete: (key: ValidStorageKey) => {
    if (!isBrowser) return;
    localStorage.removeItem(withPrefix(key));
  },

  clearAllWithPrefix: () => {
    if (!isBrowser) return;
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(KEY_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  },
};

export default localStorageManager;
