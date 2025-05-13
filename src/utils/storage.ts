/**
 * 获取存储数据
 * @param key 存储键名
 * @param isexpired 是否检查过期，默认为 true
 * @param islocal 是否使用 localStorage，默认为 true
 */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

type TimeUnit = 'minute' | 'hour' | 'day';

interface StorageData<T> {
  value: T;
  timestamp: number;
  expire: number;
  unit: TimeUnit;
}

interface SetStorageParams<T> {
  key: string;
  value: T;
  expire?: number;
  unit?: TimeUnit;
  islocal?: boolean;
}

interface GetStorageParams {
  key: string;
  islocal?: boolean;
  isexpired?: boolean;
}

/**
 * 将时间单位转换为毫秒
 * @param duration 时间长度
 * @param unit 时间单位
 * @returns 毫秒数
 */
const convertToMilliseconds = (duration: number, unit: TimeUnit): number => {
  const conversions: Record<TimeUnit, number> = {
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
  };
  return duration * conversions[unit];
};

/**
 * 检查是否在浏览器环境中
 */
const isBrowser = typeof window !== 'undefined';

/**
 * 获取存储实例
 * @param islocal 是否使用 localStorage
 * @returns Storage 实例
 */
const getStorageInstance = (islocal: boolean): Storage | null => {
  if (!isBrowser) return null;
  return islocal ? window.localStorage : window.sessionStorage;
};

/**
 * 设置存储数据
 * @param key 存储键名
 * @param value 存储值
 * @param expire 过期时间
 * @param unit 过期时间单位，默认为小时
 * @param islocal 是否使用 localStorage，默认为 true
 */
export const setStorage = <T>({
  key,
  value,
  expire,
  unit = 'hour',
  islocal = true,
}: SetStorageParams<T>) => {
  if (!isBrowser) return;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return;

  const now = Date.now();
  const expireInMs = expire ? convertToMilliseconds(expire, unit) : 0;

  const data: StorageData<T> = {
    value,
    timestamp: now,
    expire: expireInMs,
    unit,
  };

  storage.setItem(key, JSON.stringify(data));
};

export const getStorage = <T>({
  key,
  isexpired = false,
  islocal = true,
}: GetStorageParams): StorageData<T> | null => {
  if (!isBrowser) return null;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return null;

  const data = storage.getItem(key);
  if (!data) return null;

  try {
    const parsedData: StorageData<T> = JSON.parse(data);

    if (isexpired && parsedData.expire > 0) {
      const now = dayjs().utc();
      const expirationTime = dayjs(parsedData.timestamp + parsedData.expire).utc();

      if (now.isAfter(expirationTime)) {
        storage.removeItem(key);
        return null;
      }
    }

    return parsedData;
  } catch (error) {
    console.error('Error parsing storage data:', error);
    return null;
  }
};

/**
 * 移除指定的存储数据
 * @param key 存储键名
 * @param islocal 是否使用 localStorage，默认为 true
 */
export const removeStorage = (key: string, islocal = true): void => {
  if (!isBrowser) return;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return;
  
  storage.removeItem(key);
};

/**
 * 清除所有存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export const clearStorage = (islocal = true): void => {
  if (!isBrowser) return;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return;
  
  storage.clear();
};

/**
 * 获取存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export const getItem = ({ key, islocal = true }: { key: string; islocal?: boolean }) => {
  if (!isBrowser) return null;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return null;
  
  return storage.getItem(key);
};

/**
 * 设置存储数据
 * @param islocal 是否使用 localStorage，默认为 true
 */
export const setItem = ({
  key,
  value,
  islocal = true,
}: {
  key: string;
  value: string;
  islocal?: boolean;
}) => {
  if (!isBrowser) return;
  
  const storage = getStorageInstance(islocal);
  if (!storage) return;
  
  return storage.setItem(key, value);
};

const storage = {
  set: setStorage,
  get: getStorage,
  remove: removeStorage,
  clear: clearStorage,
  getItem,
  setItem,
};

export default storage;
