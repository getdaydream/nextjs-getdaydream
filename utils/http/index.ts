import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';

const HOST = 'http://localhost:3001';

export let request: (url: string, config?: RequestInit) => Promise<any>;

export default function initHttpClient(ctx?: NextPageContext) {
  if (!ctx && request) {
    return request;
  }

  request = async function request(url: string, config?: RequestInit) {
    try {
      const response = await fetch(`${HOST}${url}`, {
        ...config,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      return response.json();
    } catch (e) {
      return e;
    }
  };

  return request;
}
