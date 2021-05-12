/* eslint-disable @typescript-eslint/naming-convention */
import { FetchTypes, FlykraBase, FlykraHeaders } from '../constants/Enums';
import fetch, { Response } from 'node-fetch';

export default class FlykraClient {

	public secret: string;
	public basePath: string;

	public constructor(options: FlykraClientOptions) {
		this.secret = options.secret;
		this.basePath = options.basePath ? options.basePath : FlykraBase.APIURL;
	}

	private get<T>(endpoint: string): Promise<T> {

		const url = `${this.basePath}/${endpoint}`;

		const headers = {
			'authorization': this.secret,
			'Content-Type': FlykraHeaders.ContentTypeJSON,
			'User-Agent': FlykraHeaders.UserAgent,
			'Accept-Encoding': FlykraHeaders.AcceptEncoding
		};

		return fetch(url, { method: FetchTypes.GET, headers: { ...headers } }).then((r: Response) => {
			if (r.ok) return r.json();
			throw new Error(r.statusText);
		});
	}

	private post<T>(endpoint: string, data = {}): Promise<T> {

		const url = `${this.basePath}/${endpoint}`;

		const headers = {
			'authorization': this.secret,
			'Content-Type': FlykraHeaders.ContentTypeJSON,
			'User-Agent': FlykraHeaders.UserAgent,
			'Accept-Encoding': FlykraHeaders.AcceptEncoding
		};

		return fetch(url, { method: FetchTypes.POST, headers: { ...headers }, body: JSON.stringify(data) }).then((r: Response) => {
			if (r.ok) return r.json();
			throw new Error(r.statusText);
		});
	}

}

interface FlykraClientOptions {
	secret: string;
	basePath?: string;
}
