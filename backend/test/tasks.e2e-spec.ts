// import { INestApplication } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import * as request from 'supertest';
// import { AppModule } from '../src/app.module';

// describe('TasksController (e2e)', () => {
//   let app: INestApplication;

//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('/tasks (POST)', () => {
//     return request(app.getHttpServer())
//       .post('/tasks')
//       .send({ title: 'Test', description: 'Desc' })
//       .expect(201)
//       .expect(res => {
//         expect(res.body.title).toBe('Test');
//       });
//   });

//   it('/tasks (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/tasks')
//       .expect(200)
//       .expect(res => {
//         expect(res.body.length).toBeGreaterThan(0);
//       });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });
