import { validateOrReject } from 'class-validator';
import { env } from '@/main/env';
import { AppContainer } from '@/main/container';
import { Module } from '@/main/contracts/module';
import { HttpServer } from '@/main/http/http-server';
import { Container } from '@/main/container/contracts';

export class Application {
  private container: Container;

  constructor(private readonly modules: Module[] = []) {
    this.container = new AppContainer();
  }

  protected loadModules(): Module[] {
    return [new HttpServer(this.container)];
  }

  async start() {
    await validateOrReject(env);

    const modules = this.modules.length ? this.modules : this.loadModules();

    for (const module of modules) {
      await module.start();
    }
  }
}
