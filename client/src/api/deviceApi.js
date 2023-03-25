import { $authHost, $host } from './index';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand',);
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post('api/device', device);
  return data;
};

export const fetchDevices = async (typeId, brandId,) => {
  const { data } = await $host.get('api/device', {
    params: {
      typeId, brandId,
    }
  });
  return data;
};

export const fetchOneDevice = async (id) => {
  const token = localStorage.getItem('token');
  const { data } = await $host.get(`api/device/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return data;
};

export const getBasket = async (userId) => {
  const { data } = await $host.get(`api/basket/${userId}`);
  return data;
};

export const addDeviceToBasket = async (userId, deviceId) => {
  const { data } = await $host.patch(`api/basket/${userId}`, {
    id: deviceId
  });
  return data;
};

export const changeDeviceAmountInBasket = async (userId, deviceId, value) => {
  const { data } = await $host.put(`api/basket/${userId}`, {
    id: deviceId,
    value
  });
  return data;
};

export const rateDevice = async (deviceId, userId, rate) => {
  const { data } = await $host.put(`api/device/${deviceId}`, { userId, rate });
  return data;
};
