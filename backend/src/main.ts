import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:3000", // Adjust as needed
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  });
  app.setGlobalPrefix("api");

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);

  console.log("Backend running on http://localhost:5000");
}
bootstrap();
