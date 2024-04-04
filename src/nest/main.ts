import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as http from "http";
import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export module Backend {

  let app: INestApplication;

  export async function getApp() {
    if (!app) {
      app = await NestFactory.create(
        AppModule,
        { bodyParser: false }
      );
      app.setGlobalPrefix("api");
      app.enableShutdownHooks();
      const config = new DocumentBuilder()
        .setTitle('Nexst starter')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api/swagger', app, document);
      await app.init();
    }

    return app;
  }

  export async function getListener() {
    const app = await getApp();
    const server: http.Server = app.getHttpServer();
    const [listener] = server.listeners("request") as NextApiHandler[];
    return listener;
  }
}