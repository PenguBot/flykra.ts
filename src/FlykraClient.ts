import { Buffer } from "https://deno.land/std@0.96.0/node/buffer.ts";
import {
  FetchTypes,
  FlykraBase,
  FlykraHeaders,
  GeneratorEndpoints,
  OverlayEndpoints,
  TextEndpoints,
} from "./Enums.ts";

export class FlykraClient {
  public secret: string;
  public basePath: string;

  private headers = {
    "Content-Type": FlykraHeaders.ContentTypeJSON,
    "User-Agent": FlykraHeaders.UserAgent,
    "Accept-Encoding": FlykraHeaders.AcceptEncoding,
  };

  public constructor(options: FlykraClientOptions) {
    if (!options.secret) {
      throw new Error(
        "An API secret token must be provided to initialize Flykra client.",
      );
    }

    this.secret = options.secret;
    this.basePath = options.basePath ? options.basePath : FlykraBase.APIURL;
  }

  // Generators
  public batSlap = (avatar: string, target: string) =>
    this.post(GeneratorEndpoints.BATSLAP, {
      avatar,
      target,
    }) as BaseAPIImageResponse;

  public beautiful = (avatar: string) =>
    this.post(GeneratorEndpoints.BEAUTIFUL, { avatar }) as BaseAPIImageResponse;

  public bobRoss = (avatar: string) =>
    this.post(GeneratorEndpoints.BOBROSS, { avatar }) as BaseAPIImageResponse;

  public evil = (avatar: string) =>
    this.post(GeneratorEndpoints.EVIL, { avatar }) as BaseAPIImageResponse;

  public facepalm = (avatar: string) =>
    this.post(GeneratorEndpoints.FACEPALM, { avatar }) as BaseAPIImageResponse;

  public garbage = (avatar: string) =>
    this.post(GeneratorEndpoints.GARBAGE, { avatar }) as BaseAPIImageResponse;

  public lio = (avatar: string) =>
    this.post(GeneratorEndpoints.LIO, { avatar }) as BaseAPIImageResponse;

  public missing = (avatar: string, text: string) =>
    this.post(GeneratorEndpoints.MISSING, {
      avatar,
      text,
    }) as BaseAPIImageResponse;

  public religion = (avatar: string) =>
    this.post(GeneratorEndpoints.RELIGION, { avatar }) as BaseAPIImageResponse;

  public rip = (avatar: string) =>
    this.post(GeneratorEndpoints.RIP, { avatar }) as BaseAPIImageResponse;

  public tinder = (avatar: string, target: string) =>
    this.post(GeneratorEndpoints.TINDER, {
      avatar,
      target,
    }) as BaseAPIImageResponse;

  public triggered = (avatar: string) =>
    this.post(GeneratorEndpoints.TRIGGERED, { avatar }) as BaseAPIImageResponse;

  public wanted = (avatar: string) =>
    this.post(GeneratorEndpoints.WANTED, { avatar }) as BaseAPIImageResponse;

  // Overlays
  public rainbow = (avatar: string) =>
    this.post(OverlayEndpoints.RAINBOW, { avatar }) as BaseAPIImageResponse;

  public approved = (avatar: string) =>
    this.post(OverlayEndpoints.APPROVED, { avatar }) as BaseAPIImageResponse;

  public rejected = (avatar: string) =>
    this.post(OverlayEndpoints.REJECTED, { avatar }) as BaseAPIImageResponse;

  // Text
  public achievement = (avatar: string, text: string) =>
    this.post(TextEndpoints.ACHIEVEMENT, {
      avatar,
      text,
    }) as BaseAPIImageResponse;

  public changeMyMind = (avatar: string, text: string) =>
    this.post(TextEndpoints.CMM, { avatar, text }) as BaseAPIImageResponse;

  public illegal = (avatar: string, text: string) =>
    this.post(TextEndpoints.ILLEGAL, { avatar, text }) as BaseAPIImageResponse;

  // Core
  private post<T>(endpoint: string, data = {}): Promise<T> {
    return fetch(`${this.basePath}/${endpoint}`, {
      method: FetchTypes.POST,
      headers: { ...this.headers, authorization: this.secret },
      body: JSON.stringify(data),
    }).then((r: Response) => {
      if (r.ok) return r.arrayBuffer();
      return r.json();
    });
  }
}

interface FlykraClientOptions {
  secret: string;
  basePath?: string;
}

type BaseAPIImageResponse = Promise<Buffer[] | APIResponse>;

interface APIResponse {
  success: boolean;
  body: string;
}
