import React from 'react';
import { observable, action } from 'mobx';
import { User } from '../models';
import { request } from '@utils/http';

export enum OverlayEnum {
  LoginModal = 'LoginModal',
}

export class GlobalStore {
  @observable
  user = {} as User;

  @observable
  currentOverlay: null | OverlayEnum = null;

  @action
  setCurrentOverlay = (overlay: null | OverlayEnum) => {
    this.currentOverlay = overlay;
  };

  @observable
  loadingSignup = false;

  @observable
  loadingLogin = false;

  @action
  login = async (email: string, password: string) => {
    if (this.loadingLogin) return;
    try {
      this.loadingLogin = true;
      const { data } = await request('/users/login', {
        method: 'post',
        body: JSON.stringify({ email, password }),
      });
      console.log(data);
    } catch (e) {
    } finally {
      this.loadingLogin = false;
    }
  };

  @action
  signup = async (email: string, password: string) => {
    if (this.loadingSignup) return;
    try {
      this.loadingSignup = true;
      const { data } = await request('/users/signup', {
        method: 'post',
        body: JSON.stringify({ email, password }),
      });
      this.user = data;
    } catch (e) {
    } finally {
      this.loadingSignup = false;
    }
  };

  @action
  activate = async (token: string) => {};

  @action
  fetchUser = async () => {};
}

export const globalStore = new GlobalStore();

const globalStoreContext = React.createContext(globalStore);

export const useGlobalStore = () => React.useContext(globalStoreContext);
