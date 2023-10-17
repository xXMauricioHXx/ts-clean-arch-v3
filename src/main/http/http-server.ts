import { ExpressServer } from '@/adapters';
import { Module } from '@/main/contracts/module';
import { Container } from '@/main/container/contracts';
import { Controller } from '@/presentation/http/contracts';
import {
  makeIsAvailableController,
  makeCreateUserController,
} from '@/main/http/factories';

export class HttpServer extends ExpressServer implements Module {
  constructor(private readonly container: Container) {
    super();
  }

  protected loadControllers(): Controller[] {
    return [
      makeIsAvailableController(),
      makeCreateUserController(this.container),
    ];
  }
}
