import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Холодильники' },
      { id: 3, name: 'Телевизоры' },
      { id: 4, name: 'Ноутбуки' }
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' }
    ];
    this._devices = [
      {
        id: 1, name: 'iPhone 12', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 1, brandId: 1,
      },
      {
        id: 2, name: 'SAMSUNG 11', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 2, brandId: 1,
      },
      {
        id: 3, name: 'LENOVO 13', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 3, brandId: 2,
      },
      {
        id: 4, name: 'ASUS 14', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 1, brandId: 4,
      },
      {
        id: 5, name: 'LENOVO 15', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 2, brandId: 3,
      },
      {
        id: 6, name: 'ASUS 16', price: 25000, img: 'https://reactrouter.com/_docs/tutorial/14.webp', typeId: 1, brandId: 4,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get devices() {
    return this._devices;
  }
}
