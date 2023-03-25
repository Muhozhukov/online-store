import { makeAutoObservable } from 'mobx';

export default class BasketStore {
  constructor() {
    this._devices = [];
    this._totalPrice = null;
    makeAutoObservable(this);
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setTotalPrice(totalPrice) {
    this._totalPrice = totalPrice;
  }

  get devices() {
    return this._devices;
  }

  get totalPrice() {
    return this._totalPrice;
  }
}
